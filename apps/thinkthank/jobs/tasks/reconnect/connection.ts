import { schemaTask } from '@trigger.dev/sdk/v3'
import { syncConnection } from 'jobs/tasks/bank/sync/connection'
import { z } from 'zod'

export const reconnectConnection = schemaTask({
    id: 'reconnect-connection',
    maxDuration: 300,
    retry: {
        maxAttempts: 2
    },
    schema: z.object({
        workspaceId: z.string().uuid(),
        connectionId: z.string().uuid(),
        provider: z.string()
    }),
    run: async ({ workspaceId, connectionId, provider }) => {
        await syncConnection.trigger({
            connectionId,
            manualSync: true,
            workspaceId
        })
    }
})
