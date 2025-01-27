import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTouchpointCreateManyLeadInputSchema } from './LeadTouchpointCreateManyLeadInputSchema'

export const LeadTouchpointCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadTouchpointCreateManyLeadInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => LeadTouchpointCreateManyLeadInputSchema),
            z.lazy(() => LeadTouchpointCreateManyLeadInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadTouchpointCreateManyLeadInputEnvelopeSchema
