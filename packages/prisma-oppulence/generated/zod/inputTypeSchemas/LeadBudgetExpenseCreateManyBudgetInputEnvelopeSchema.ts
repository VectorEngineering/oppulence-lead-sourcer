import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetExpenseCreateManyBudgetInputSchema } from './LeadBudgetExpenseCreateManyBudgetInputSchema'

export const LeadBudgetExpenseCreateManyBudgetInputEnvelopeSchema: z.ZodType<Prisma.LeadBudgetExpenseCreateManyBudgetInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => LeadBudgetExpenseCreateManyBudgetInputSchema),
            z.lazy(() => LeadBudgetExpenseCreateManyBudgetInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadBudgetExpenseCreateManyBudgetInputEnvelopeSchema
