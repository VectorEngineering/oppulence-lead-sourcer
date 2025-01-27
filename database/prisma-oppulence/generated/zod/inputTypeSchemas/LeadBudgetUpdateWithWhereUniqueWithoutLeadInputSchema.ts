import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema'
import { LeadBudgetUpdateWithoutLeadInputSchema } from './LeadBudgetUpdateWithoutLeadInputSchema'
import { LeadBudgetUncheckedUpdateWithoutLeadInputSchema } from './LeadBudgetUncheckedUpdateWithoutLeadInputSchema'

export const LeadBudgetUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadBudgetUpdateWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadBudgetWhereUniqueInputSchema),
        data: z.union([z.lazy(() => LeadBudgetUpdateWithoutLeadInputSchema), z.lazy(() => LeadBudgetUncheckedUpdateWithoutLeadInputSchema)])
    })
    .strict()

export default LeadBudgetUpdateWithWhereUniqueWithoutLeadInputSchema
