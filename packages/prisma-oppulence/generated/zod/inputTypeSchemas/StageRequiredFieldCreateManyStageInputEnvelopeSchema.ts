import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageRequiredFieldCreateManyStageInputSchema } from './StageRequiredFieldCreateManyStageInputSchema'

export const StageRequiredFieldCreateManyStageInputEnvelopeSchema: z.ZodType<Prisma.StageRequiredFieldCreateManyStageInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => StageRequiredFieldCreateManyStageInputSchema),
            z.lazy(() => StageRequiredFieldCreateManyStageInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default StageRequiredFieldCreateManyStageInputEnvelopeSchema
