import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoreCreateWithoutScoreHistoryInputSchema } from './LeadScoreCreateWithoutScoreHistoryInputSchema'
import { LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema } from './LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema'
import { LeadScoreCreateOrConnectWithoutScoreHistoryInputSchema } from './LeadScoreCreateOrConnectWithoutScoreHistoryInputSchema'
import { LeadScoreWhereUniqueInputSchema } from './LeadScoreWhereUniqueInputSchema'

export const LeadScoreCreateNestedOneWithoutScoreHistoryInputSchema: z.ZodType<Prisma.LeadScoreCreateNestedOneWithoutScoreHistoryInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadScoreCreateWithoutScoreHistoryInputSchema),
                z.lazy(() => LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => LeadScoreCreateOrConnectWithoutScoreHistoryInputSchema).optional(),
        connect: z.lazy(() => LeadScoreWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadScoreCreateNestedOneWithoutScoreHistoryInputSchema
