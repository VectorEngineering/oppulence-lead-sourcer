import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadConsentCreateManyLeadInputSchema } from './LeadConsentCreateManyLeadInputSchema'

export const LeadConsentCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadConsentCreateManyLeadInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LeadConsentCreateManyLeadInputSchema), z.lazy(() => LeadConsentCreateManyLeadInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadConsentCreateManyLeadInputEnvelopeSchema
