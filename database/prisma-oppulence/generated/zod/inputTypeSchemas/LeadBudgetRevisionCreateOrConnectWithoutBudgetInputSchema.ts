import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetRevisionWhereUniqueInputSchema } from './LeadBudgetRevisionWhereUniqueInputSchema'
import { LeadBudgetRevisionCreateWithoutBudgetInputSchema } from './LeadBudgetRevisionCreateWithoutBudgetInputSchema'
import { LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema } from './LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema'

export const LeadBudgetRevisionCreateOrConnectWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetRevisionCreateOrConnectWithoutBudgetInput> =
    z
        .object({
            where: z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => LeadBudgetRevisionCreateWithoutBudgetInputSchema),
                z.lazy(() => LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema)
            ])
        })
        .strict()

export default LeadBudgetRevisionCreateOrConnectWithoutBudgetInputSchema
