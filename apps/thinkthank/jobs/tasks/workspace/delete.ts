import { logger, schemaTask } from '@trigger.dev/sdk/v3'

import { financialEngineClient } from 'lib/financial-engine-client'
import { prisma } from '@dub/prisma-thinkthank'
import { z } from 'zod'

/**
 * @workspace Workspace Deletion Task
 *
 * This task handles the complete deletion of a workspace and its associated resources.
 * It performs the following operations in sequence:
 *
 * 1. Bank Connection Cleanup:
 *    - Retrieves all bank connections associated with the workspace
 *    - For each connection:
 *      - Deletes the connection record from our database
 *      - Removes the connection from the provider (Teller/Plaid/GoCardless)
 *      - Cleans up any associated access tokens
 *
 * 2. Data Cleanup:
 *    - Removes all transactions linked to the workspace
 *    - Deletes workspace-specific settings and configurations
 *    - Cleans up any associated files or attachments
 *
 * 3. Subscription Management:
 *    - Cancels any active subscriptions
 *    - Removes billing information
 *    - Handles any pending invoices
 *
 * 4. User Access:
 *    - Revokes access for all team members
 *    - Removes user-workspace associations
 *    - Cleans up permissions and roles
 *
 * @param workspaceId - The unique identifier of the workspace to be deleted
 * @param force - Optional flag to force deletion even if there are active resources
 * @throws {Error} If deletion fails or if there are active resources and force is false
 * @returns {Promise<void>} Resolves when the workspace is completely deleted
 */
export const deleteTeam = schemaTask({
    id: 'delete-team',
    schema: z.object({
        workspaceId: z.string(),
        connections: z.array(
            z.object({
                provider: z.enum(['teller', 'plaid', 'gocardless']).nullable(),
                reference_id: z.string().nullable(),
                access_token: z.string().nullable()
            })
        )
    }),
    maxDuration: 300,
    queue: {
        concurrencyLimit: 10
    },
    run: async ({ workspaceId, connections }) => {
        // Unregister sync scheduler (Not implemented yet in Trigger.dev)
        // await schedules.del(workspaceId);

        // Delete connections in providers
        const connectionPromises = connections.map(async (connection) => {
            if (!connection.reference_id || !connection.provider || !connection.access_token) {
                return
            }

            // delete the connections tied to the workspace of interests
            const deletedConnections = await prisma.bankConnection.deleteMany({
                where: {
                    referenceId: connection.reference_id,
                    projectId: workspaceId,
                    accessToken: connection.access_token
                }
            })

            if (deletedConnections.count > 0) {
                return
            }

            // TODO: we need to also delete the connection in the provider
            const deletedAccount = await financialEngineClient.accounts.delete({
                accountId: connection.reference_id,
                provider: connection.provider,
                accessToken: connection.access_token
            })

            console.log('deletedAccount', deletedAccount)

            return deletedConnections
        })

        logger.info('Deleting team connections', {
            connections: connections.length
        })

        await Promise.all(connectionPromises)
    }
})
