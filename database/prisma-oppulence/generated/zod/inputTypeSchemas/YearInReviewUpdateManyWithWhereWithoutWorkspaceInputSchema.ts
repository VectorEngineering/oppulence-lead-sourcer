import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { YearInReviewScalarWhereInputSchema } from './YearInReviewScalarWhereInputSchema'
import { YearInReviewUpdateManyMutationInputSchema } from './YearInReviewUpdateManyMutationInputSchema'
import { YearInReviewUncheckedUpdateManyWithoutWorkspaceInputSchema } from './YearInReviewUncheckedUpdateManyWithoutWorkspaceInputSchema'

export const YearInReviewUpdateManyWithWhereWithoutWorkspaceInputSchema: z.ZodType<Prisma.YearInReviewUpdateManyWithWhereWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => YearInReviewScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => YearInReviewUpdateManyMutationInputSchema),
                z.lazy(() => YearInReviewUncheckedUpdateManyWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default YearInReviewUpdateManyWithWhereWithoutWorkspaceInputSchema
