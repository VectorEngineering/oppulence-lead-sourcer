import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutLeadBudgetInputSchema } from './LeadUpdateWithoutLeadBudgetInputSchema'
import { LeadUncheckedUpdateWithoutLeadBudgetInputSchema } from './LeadUncheckedUpdateWithoutLeadBudgetInputSchema'
import { LeadCreateWithoutLeadBudgetInputSchema } from './LeadCreateWithoutLeadBudgetInputSchema'
import { LeadUncheckedCreateWithoutLeadBudgetInputSchema } from './LeadUncheckedCreateWithoutLeadBudgetInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutLeadBudgetInputSchema: z.ZodType<Prisma.LeadUpsertWithoutLeadBudgetInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadUpdateWithoutLeadBudgetInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutLeadBudgetInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadCreateWithoutLeadBudgetInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutLeadBudgetInputSchema)
        ]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutLeadBudgetInputSchema
