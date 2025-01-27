import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationCreateManyPipelineInputSchema } from './PipelineAutomationCreateManyPipelineInputSchema'

export const PipelineAutomationCreateManyPipelineInputEnvelopeSchema: z.ZodType<Prisma.PipelineAutomationCreateManyPipelineInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => PipelineAutomationCreateManyPipelineInputSchema),
                z.lazy(() => PipelineAutomationCreateManyPipelineInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default PipelineAutomationCreateManyPipelineInputEnvelopeSchema
