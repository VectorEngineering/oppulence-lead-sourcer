import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoreHistoryWhereUniqueInputSchema } from './LeadScoreHistoryWhereUniqueInputSchema'
import { LeadScoreHistoryCreateWithoutLeadScoreInputSchema } from './LeadScoreHistoryCreateWithoutLeadScoreInputSchema'
import { LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema } from './LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema'

export const LeadScoreHistoryCreateOrConnectWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadScoreHistoryCreateOrConnectWithoutLeadScoreInput> =
    z
        .object({
            where: z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => LeadScoreHistoryCreateWithoutLeadScoreInputSchema),
                z.lazy(() => LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema)
            ])
        })
        .strict()

export default LeadScoreHistoryCreateOrConnectWithoutLeadScoreInputSchema
