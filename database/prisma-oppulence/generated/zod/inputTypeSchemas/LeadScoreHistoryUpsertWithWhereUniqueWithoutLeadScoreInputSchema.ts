import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoreHistoryWhereUniqueInputSchema } from './LeadScoreHistoryWhereUniqueInputSchema'
import { LeadScoreHistoryUpdateWithoutLeadScoreInputSchema } from './LeadScoreHistoryUpdateWithoutLeadScoreInputSchema'
import { LeadScoreHistoryUncheckedUpdateWithoutLeadScoreInputSchema } from './LeadScoreHistoryUncheckedUpdateWithoutLeadScoreInputSchema'
import { LeadScoreHistoryCreateWithoutLeadScoreInputSchema } from './LeadScoreHistoryCreateWithoutLeadScoreInputSchema'
import { LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema } from './LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema'

export const LeadScoreHistoryUpsertWithWhereUniqueWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadScoreHistoryUpsertWithWhereUniqueWithoutLeadScoreInput> =
    z
        .object({
            where: z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadScoreHistoryUpdateWithoutLeadScoreInputSchema),
                z.lazy(() => LeadScoreHistoryUncheckedUpdateWithoutLeadScoreInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadScoreHistoryCreateWithoutLeadScoreInputSchema),
                z.lazy(() => LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema)
            ])
        })
        .strict()

export default LeadScoreHistoryUpsertWithWhereUniqueWithoutLeadScoreInputSchema
