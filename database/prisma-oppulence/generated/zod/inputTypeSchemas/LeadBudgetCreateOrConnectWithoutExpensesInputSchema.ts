import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema'
import { LeadBudgetCreateWithoutExpensesInputSchema } from './LeadBudgetCreateWithoutExpensesInputSchema'
import { LeadBudgetUncheckedCreateWithoutExpensesInputSchema } from './LeadBudgetUncheckedCreateWithoutExpensesInputSchema'

export const LeadBudgetCreateOrConnectWithoutExpensesInputSchema: z.ZodType<Prisma.LeadBudgetCreateOrConnectWithoutExpensesInput> = z
    .object({
        where: z.lazy(() => LeadBudgetWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadBudgetCreateWithoutExpensesInputSchema),
            z.lazy(() => LeadBudgetUncheckedCreateWithoutExpensesInputSchema)
        ])
    })
    .strict()

export default LeadBudgetCreateOrConnectWithoutExpensesInputSchema
