import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineIntegrationCreateManyInputSchema } from '../inputTypeSchemas/PipelineIntegrationCreateManyInputSchema'

export const PipelineIntegrationCreateManyArgsSchema: z.ZodType<Prisma.PipelineIntegrationCreateManyArgs> = z
    .object({
        data: z.union([PipelineIntegrationCreateManyInputSchema, PipelineIntegrationCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PipelineIntegrationCreateManyArgsSchema
