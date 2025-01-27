import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskCreateManyLeadInputSchema } from './LeadTaskCreateManyLeadInputSchema'

export const LeadTaskCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadTaskCreateManyLeadInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LeadTaskCreateManyLeadInputSchema), z.lazy(() => LeadTaskCreateManyLeadInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadTaskCreateManyLeadInputEnvelopeSchema
