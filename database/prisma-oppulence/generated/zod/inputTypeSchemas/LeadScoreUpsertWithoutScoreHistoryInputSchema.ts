import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoreUpdateWithoutScoreHistoryInputSchema } from './LeadScoreUpdateWithoutScoreHistoryInputSchema'
import { LeadScoreUncheckedUpdateWithoutScoreHistoryInputSchema } from './LeadScoreUncheckedUpdateWithoutScoreHistoryInputSchema'
import { LeadScoreCreateWithoutScoreHistoryInputSchema } from './LeadScoreCreateWithoutScoreHistoryInputSchema'
import { LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema } from './LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema'
import { LeadScoreWhereInputSchema } from './LeadScoreWhereInputSchema'

export const LeadScoreUpsertWithoutScoreHistoryInputSchema: z.ZodType<Prisma.LeadScoreUpsertWithoutScoreHistoryInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadScoreUpdateWithoutScoreHistoryInputSchema),
            z.lazy(() => LeadScoreUncheckedUpdateWithoutScoreHistoryInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadScoreCreateWithoutScoreHistoryInputSchema),
            z.lazy(() => LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema)
        ]),
        where: z.lazy(() => LeadScoreWhereInputSchema).optional()
    })
    .strict()

export default LeadScoreUpsertWithoutScoreHistoryInputSchema
