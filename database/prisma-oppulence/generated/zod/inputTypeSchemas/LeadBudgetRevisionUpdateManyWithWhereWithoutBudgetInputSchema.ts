import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetRevisionScalarWhereInputSchema } from './LeadBudgetRevisionScalarWhereInputSchema'
import { LeadBudgetRevisionUpdateManyMutationInputSchema } from './LeadBudgetRevisionUpdateManyMutationInputSchema'
import { LeadBudgetRevisionUncheckedUpdateManyWithoutBudgetInputSchema } from './LeadBudgetRevisionUncheckedUpdateManyWithoutBudgetInputSchema'

export const LeadBudgetRevisionUpdateManyWithWhereWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetRevisionUpdateManyWithWhereWithoutBudgetInput> =
    z
        .object({
            where: z.lazy(() => LeadBudgetRevisionScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => LeadBudgetRevisionUpdateManyMutationInputSchema),
                z.lazy(() => LeadBudgetRevisionUncheckedUpdateManyWithoutBudgetInputSchema)
            ])
        })
        .strict()

export default LeadBudgetRevisionUpdateManyWithWhereWithoutBudgetInputSchema
