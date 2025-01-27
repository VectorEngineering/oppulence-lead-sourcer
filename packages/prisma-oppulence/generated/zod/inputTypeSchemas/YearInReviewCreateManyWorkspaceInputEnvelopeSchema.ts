import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { YearInReviewCreateManyWorkspaceInputSchema } from './YearInReviewCreateManyWorkspaceInputSchema'

export const YearInReviewCreateManyWorkspaceInputEnvelopeSchema: z.ZodType<Prisma.YearInReviewCreateManyWorkspaceInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => YearInReviewCreateManyWorkspaceInputSchema),
            z.lazy(() => YearInReviewCreateManyWorkspaceInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default YearInReviewCreateManyWorkspaceInputEnvelopeSchema
