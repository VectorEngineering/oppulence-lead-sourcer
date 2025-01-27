import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetRevisionWhereUniqueInputSchema } from './LeadBudgetRevisionWhereUniqueInputSchema'
import { LeadBudgetRevisionUpdateWithoutBudgetInputSchema } from './LeadBudgetRevisionUpdateWithoutBudgetInputSchema'
import { LeadBudgetRevisionUncheckedUpdateWithoutBudgetInputSchema } from './LeadBudgetRevisionUncheckedUpdateWithoutBudgetInputSchema'
import { LeadBudgetRevisionCreateWithoutBudgetInputSchema } from './LeadBudgetRevisionCreateWithoutBudgetInputSchema'
import { LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema } from './LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema'

export const LeadBudgetRevisionUpsertWithWhereUniqueWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetRevisionUpsertWithWhereUniqueWithoutBudgetInput> =
    z
        .object({
            where: z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadBudgetRevisionUpdateWithoutBudgetInputSchema),
                z.lazy(() => LeadBudgetRevisionUncheckedUpdateWithoutBudgetInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadBudgetRevisionCreateWithoutBudgetInputSchema),
                z.lazy(() => LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema)
            ])
        })
        .strict()

export default LeadBudgetRevisionUpsertWithWhereUniqueWithoutBudgetInputSchema
