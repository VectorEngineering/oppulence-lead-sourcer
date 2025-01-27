import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { YearInReviewWhereUniqueInputSchema } from './YearInReviewWhereUniqueInputSchema'
import { YearInReviewUpdateWithoutWorkspaceInputSchema } from './YearInReviewUpdateWithoutWorkspaceInputSchema'
import { YearInReviewUncheckedUpdateWithoutWorkspaceInputSchema } from './YearInReviewUncheckedUpdateWithoutWorkspaceInputSchema'

export const YearInReviewUpdateWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.YearInReviewUpdateWithWhereUniqueWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => YearInReviewWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => YearInReviewUpdateWithoutWorkspaceInputSchema),
                z.lazy(() => YearInReviewUncheckedUpdateWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default YearInReviewUpdateWithWhereUniqueWithoutWorkspaceInputSchema
