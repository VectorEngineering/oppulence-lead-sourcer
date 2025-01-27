import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAccessRuleCreateManyPipelineInputSchema } from './PipelineAccessRuleCreateManyPipelineInputSchema'

export const PipelineAccessRuleCreateManyPipelineInputEnvelopeSchema: z.ZodType<Prisma.PipelineAccessRuleCreateManyPipelineInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => PipelineAccessRuleCreateManyPipelineInputSchema),
                z.lazy(() => PipelineAccessRuleCreateManyPipelineInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default PipelineAccessRuleCreateManyPipelineInputEnvelopeSchema
