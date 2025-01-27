import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetRevisionWhereUniqueInputSchema } from './LeadBudgetRevisionWhereUniqueInputSchema'
import { LeadBudgetRevisionUpdateWithoutBudgetInputSchema } from './LeadBudgetRevisionUpdateWithoutBudgetInputSchema'
import { LeadBudgetRevisionUncheckedUpdateWithoutBudgetInputSchema } from './LeadBudgetRevisionUncheckedUpdateWithoutBudgetInputSchema'

export const LeadBudgetRevisionUpdateWithWhereUniqueWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetRevisionUpdateWithWhereUniqueWithoutBudgetInput> =
    z
        .object({
            where: z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadBudgetRevisionUpdateWithoutBudgetInputSchema),
                z.lazy(() => LeadBudgetRevisionUncheckedUpdateWithoutBudgetInputSchema)
            ])
        })
        .strict()

export default LeadBudgetRevisionUpdateWithWhereUniqueWithoutBudgetInputSchema
