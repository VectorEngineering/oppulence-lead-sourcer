import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadRiskCreateManyLeadInputSchema } from './LeadRiskCreateManyLeadInputSchema'

export const LeadRiskCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadRiskCreateManyLeadInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LeadRiskCreateManyLeadInputSchema), z.lazy(() => LeadRiskCreateManyLeadInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadRiskCreateManyLeadInputEnvelopeSchema
