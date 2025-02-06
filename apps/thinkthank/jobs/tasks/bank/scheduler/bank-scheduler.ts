import { logger, schedules } from '@trigger.dev/sdk/v3'

import { prisma } from '@dub/prisma-thinkthank'
import { syncConnection } from '../sync/connection'

// This is a fan-out pattern. We want to trigger a job for each bank connection
// Then in sync connection we check if the connection is connected and if not we update the status (Connected, Disconnected)
export const bankSyncScheduler = schedules.task({
    id: 'bank-sync-scheduler',
    maxDuration: 600,
    run: async (payload) => {
        // Only run in production (Set in Trigger.dev)
        if (process.env.TRIGGER_ENVIRONMENT !== 'production') return

        const workspaceId = payload.externalId

        if (!workspaceId) {
            throw new Error('workspaceId is required')
        }

        try {
            const bankConnections = await prisma.bankConnection.findMany({
                where: {
                    projectId: workspaceId
                },
                select: {
                    id: true
                }
            })

            const formattedConnections = bankConnections.map((connection) => ({
                payload: {
                    connectionId: connection.id,
                    workspaceId
                },
                tags: ['workspace_id', workspaceId]
            }))

            // If there are no bank connections to sync, return
            if (!formattedConnections?.length) {
                logger.info('No bank connections to sync')
                return
            }

            await syncConnection.batchTrigger(formattedConnections)
        } catch (error) {
            logger.error('Failed to sync bank connections', { error })

            throw error
        }
    }
})
