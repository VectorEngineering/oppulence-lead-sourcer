import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetUpdateWithoutRevisionsInputSchema } from './LeadBudgetUpdateWithoutRevisionsInputSchema'
import { LeadBudgetUncheckedUpdateWithoutRevisionsInputSchema } from './LeadBudgetUncheckedUpdateWithoutRevisionsInputSchema'
import { LeadBudgetCreateWithoutRevisionsInputSchema } from './LeadBudgetCreateWithoutRevisionsInputSchema'
import { LeadBudgetUncheckedCreateWithoutRevisionsInputSchema } from './LeadBudgetUncheckedCreateWithoutRevisionsInputSchema'
import { LeadBudgetWhereInputSchema } from './LeadBudgetWhereInputSchema'

export const LeadBudgetUpsertWithoutRevisionsInputSchema: z.ZodType<Prisma.LeadBudgetUpsertWithoutRevisionsInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadBudgetUpdateWithoutRevisionsInputSchema),
            z.lazy(() => LeadBudgetUncheckedUpdateWithoutRevisionsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadBudgetCreateWithoutRevisionsInputSchema),
            z.lazy(() => LeadBudgetUncheckedCreateWithoutRevisionsInputSchema)
        ]),
        where: z.lazy(() => LeadBudgetWhereInputSchema).optional()
    })
    .strict()

export default LeadBudgetUpsertWithoutRevisionsInputSchema
