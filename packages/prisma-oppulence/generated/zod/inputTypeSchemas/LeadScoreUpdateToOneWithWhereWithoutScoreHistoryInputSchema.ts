import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoreWhereInputSchema } from './LeadScoreWhereInputSchema'
import { LeadScoreUpdateWithoutScoreHistoryInputSchema } from './LeadScoreUpdateWithoutScoreHistoryInputSchema'
import { LeadScoreUncheckedUpdateWithoutScoreHistoryInputSchema } from './LeadScoreUncheckedUpdateWithoutScoreHistoryInputSchema'

export const LeadScoreUpdateToOneWithWhereWithoutScoreHistoryInputSchema: z.ZodType<Prisma.LeadScoreUpdateToOneWithWhereWithoutScoreHistoryInput> =
    z
        .object({
            where: z.lazy(() => LeadScoreWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadScoreUpdateWithoutScoreHistoryInputSchema),
                z.lazy(() => LeadScoreUncheckedUpdateWithoutScoreHistoryInputSchema)
            ])
        })
        .strict()

export default LeadScoreUpdateToOneWithWhereWithoutScoreHistoryInputSchema
