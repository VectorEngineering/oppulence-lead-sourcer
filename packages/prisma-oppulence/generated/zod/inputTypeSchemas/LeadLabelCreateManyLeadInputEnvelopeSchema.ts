import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadLabelCreateManyLeadInputSchema } from './LeadLabelCreateManyLeadInputSchema'

export const LeadLabelCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadLabelCreateManyLeadInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LeadLabelCreateManyLeadInputSchema), z.lazy(() => LeadLabelCreateManyLeadInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadLabelCreateManyLeadInputEnvelopeSchema
