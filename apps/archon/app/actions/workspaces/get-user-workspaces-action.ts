'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { prisma } from '@dub/prisma-archon'

export const getUserWorkspaces = authenticatedAction
    .metadata({
        name: 'get-user-workspaces'
    })
    .action(async ({ ctx: { userId } }) => {
        try {
            // Get all workspaces where the user is a member
            const userWorkspaces = await prisma.workspaceMember.findMany({
                where: {
                    userId
                },
                include: {
                    workspace: true
                }
            })

            return {
                success: true,
                workspaces: userWorkspaces.map(({ workspace, role }) => ({
                    ...workspace,
                    role
                }))
            }
        } catch (error) {
            console.error('Failed to get user workspaces:', error)
            return {
                success: false,
                error: 'Failed to fetch workspaces'
            }
        }
    })
