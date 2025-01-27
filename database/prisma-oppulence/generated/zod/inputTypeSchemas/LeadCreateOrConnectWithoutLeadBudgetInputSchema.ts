import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutLeadBudgetInputSchema } from './LeadCreateWithoutLeadBudgetInputSchema'
import { LeadUncheckedCreateWithoutLeadBudgetInputSchema } from './LeadUncheckedCreateWithoutLeadBudgetInputSchema'

export const LeadCreateOrConnectWithoutLeadBudgetInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutLeadBudgetInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadCreateWithoutLeadBudgetInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutLeadBudgetInputSchema)
        ])
    })
    .strict()

export default LeadCreateOrConnectWithoutLeadBudgetInputSchema
