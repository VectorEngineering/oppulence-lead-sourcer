import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineIntegrationCreateManyPipelineInputSchema } from './PipelineIntegrationCreateManyPipelineInputSchema'

export const PipelineIntegrationCreateManyPipelineInputEnvelopeSchema: z.ZodType<Prisma.PipelineIntegrationCreateManyPipelineInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => PipelineIntegrationCreateManyPipelineInputSchema),
                z.lazy(() => PipelineIntegrationCreateManyPipelineInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default PipelineIntegrationCreateManyPipelineInputEnvelopeSchema
