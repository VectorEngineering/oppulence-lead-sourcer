import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadContactPreferenceCreateManyLeadInputSchema } from './LeadContactPreferenceCreateManyLeadInputSchema'

export const LeadContactPreferenceCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadContactPreferenceCreateManyLeadInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => LeadContactPreferenceCreateManyLeadInputSchema),
            z.lazy(() => LeadContactPreferenceCreateManyLeadInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadContactPreferenceCreateManyLeadInputEnvelopeSchema
