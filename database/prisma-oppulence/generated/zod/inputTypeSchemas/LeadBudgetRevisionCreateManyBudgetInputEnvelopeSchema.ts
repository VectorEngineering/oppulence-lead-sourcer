import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetRevisionCreateManyBudgetInputSchema } from './LeadBudgetRevisionCreateManyBudgetInputSchema'

export const LeadBudgetRevisionCreateManyBudgetInputEnvelopeSchema: z.ZodType<Prisma.LeadBudgetRevisionCreateManyBudgetInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => LeadBudgetRevisionCreateManyBudgetInputSchema),
            z.lazy(() => LeadBudgetRevisionCreateManyBudgetInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadBudgetRevisionCreateManyBudgetInputEnvelopeSchema
