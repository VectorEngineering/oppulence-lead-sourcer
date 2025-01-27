import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationTypeSchema } from './IntegrationTypeSchema'

export const PipelineIntegrationCreateManyInputSchema: z.ZodType<Prisma.PipelineIntegrationCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        pipelineId: z.string(),
        type: z.lazy(() => IntegrationTypeSchema),
        name: z.string(),
        provider: z.string(),
        config: z.string(),
        isActive: z.boolean().optional(),
        lastSyncedAt: z.coerce.date().optional().nullable()
    })
    .strict()

export default PipelineIntegrationCreateManyInputSchema
