import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetScalarWhereInputSchema } from './LeadBudgetScalarWhereInputSchema'
import { LeadBudgetUpdateManyMutationInputSchema } from './LeadBudgetUpdateManyMutationInputSchema'
import { LeadBudgetUncheckedUpdateManyWithoutLeadInputSchema } from './LeadBudgetUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadBudgetUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadBudgetUpdateManyWithWhereWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadBudgetScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => LeadBudgetUpdateManyMutationInputSchema),
            z.lazy(() => LeadBudgetUncheckedUpdateManyWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadBudgetUpdateManyWithWhereWithoutLeadInputSchema
