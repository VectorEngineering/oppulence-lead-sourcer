import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadHistoryCreateManyLeadInputSchema } from './LeadHistoryCreateManyLeadInputSchema'

export const LeadHistoryCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadHistoryCreateManyLeadInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LeadHistoryCreateManyLeadInputSchema), z.lazy(() => LeadHistoryCreateManyLeadInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadHistoryCreateManyLeadInputEnvelopeSchema
