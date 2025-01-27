import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadRequirementCreateManyLeadInputSchema } from './LeadRequirementCreateManyLeadInputSchema'

export const LeadRequirementCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadRequirementCreateManyLeadInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => LeadRequirementCreateManyLeadInputSchema),
            z.lazy(() => LeadRequirementCreateManyLeadInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadRequirementCreateManyLeadInputEnvelopeSchema
