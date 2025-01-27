import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineArgsSchema } from '../outputTypeSchemas/PipelineArgsSchema'

export const PipelineIntegrationSelectSchema: z.ZodType<Prisma.PipelineIntegrationSelect> = z
    .object({
        id: z.boolean().optional(),
        pipelineId: z.boolean().optional(),
        type: z.boolean().optional(),
        name: z.boolean().optional(),
        provider: z.boolean().optional(),
        config: z.boolean().optional(),
        isActive: z.boolean().optional(),
        lastSyncedAt: z.boolean().optional(),
        pipeline: z.union([z.boolean(), z.lazy(() => PipelineArgsSchema)]).optional()
    })
    .strict()

export default PipelineIntegrationSelectSchema
