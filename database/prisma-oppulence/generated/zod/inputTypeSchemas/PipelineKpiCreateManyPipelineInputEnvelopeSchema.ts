import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineKpiCreateManyPipelineInputSchema } from './PipelineKpiCreateManyPipelineInputSchema'

export const PipelineKpiCreateManyPipelineInputEnvelopeSchema: z.ZodType<Prisma.PipelineKpiCreateManyPipelineInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => PipelineKpiCreateManyPipelineInputSchema),
            z.lazy(() => PipelineKpiCreateManyPipelineInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PipelineKpiCreateManyPipelineInputEnvelopeSchema
