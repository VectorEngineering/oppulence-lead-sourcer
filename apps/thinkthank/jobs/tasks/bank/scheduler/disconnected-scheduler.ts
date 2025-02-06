import { logger, schedules } from '@trigger.dev/sdk/v3'

import { prisma } from '@dub/prisma-thinkthank'
import { disconnectedNotifications } from '../notifications/disconnected'

const BATCH_SIZE = 50

export const disconnectedScheduler = schedules.task({
    id: 'disconnected-scheduler',
    // Every Monday at 2:30pm
    cron: '30 14 * * 1',
    run: async () => {
        // Only run in production (Set in Trigger.dev)
        if (process.env.TRIGGER_ENVIRONMENT !== 'production') return

        const bankConnections = await prisma.bankConnection.findMany({
            where: {
                status: 'disconnected'
            },
            select: {
                name: true,
                project: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        const usersPromises = bankConnections.map(async ({ project, name }) => {
            const users = await prisma.projectUsers.findMany({
                where: {
                    projectId: project.id,
                    role: 'owner'
                },
                select: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            fullName: true,
                            locale: true
                        }
                    }
                }
            })

            return users.map((member) => ({
                user: {
                    id: member.user.id,
                    email: member.user.email || '',
                    locale: member.user.locale || '',
                    full_name: member.user.fullName || ''
                },
                bankName: name,
                workspaceName: project.name,
                workspaceSlug: project.id
            }))
        })

        const users = (await Promise.all(usersPromises)).flat()

        if (users.length === 0) {
            logger.info('No disconnected banks found')
            return
        }

        for (let i = 0; i < users.length; i += BATCH_SIZE) {
            const userBatch = users.slice(i, i + BATCH_SIZE)
            await disconnectedNotifications.triggerAndWait({
                users: userBatch
            })
        }
    }
})
