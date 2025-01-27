import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineIntegrationIncludeSchema } from '../inputTypeSchemas/PipelineIntegrationIncludeSchema'
import { PipelineIntegrationCreateInputSchema } from '../inputTypeSchemas/PipelineIntegrationCreateInputSchema'
import { PipelineIntegrationUncheckedCreateInputSchema } from '../inputTypeSchemas/PipelineIntegrationUncheckedCreateInputSchema'
import { PipelineArgsSchema } from './PipelineArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const PipelineIntegrationCreateArgsSchema: z.ZodType<Prisma.PipelineIntegrationCreateArgs> = z
    .object({
        select: PipelineIntegrationSelectSchema.optional(),
        include: PipelineIntegrationIncludeSchema.optional(),
        data: z.union([PipelineIntegrationCreateInputSchema, PipelineIntegrationUncheckedCreateInputSchema])
    })
    .strict()

export default PipelineIntegrationCreateArgsSchema
