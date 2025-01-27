import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetExpenseWhereUniqueInputSchema } from './LeadBudgetExpenseWhereUniqueInputSchema'
import { LeadBudgetExpenseUpdateWithoutBudgetInputSchema } from './LeadBudgetExpenseUpdateWithoutBudgetInputSchema'
import { LeadBudgetExpenseUncheckedUpdateWithoutBudgetInputSchema } from './LeadBudgetExpenseUncheckedUpdateWithoutBudgetInputSchema'

export const LeadBudgetExpenseUpdateWithWhereUniqueWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetExpenseUpdateWithWhereUniqueWithoutBudgetInput> =
    z
        .object({
            where: z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadBudgetExpenseUpdateWithoutBudgetInputSchema),
                z.lazy(() => LeadBudgetExpenseUncheckedUpdateWithoutBudgetInputSchema)
            ])
        })
        .strict()

export default LeadBudgetExpenseUpdateWithWhereUniqueWithoutBudgetInputSchema
