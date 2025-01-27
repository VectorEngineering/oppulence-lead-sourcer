import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskCreateManyAssignedToInputSchema } from './LeadTaskCreateManyAssignedToInputSchema'

export const LeadTaskCreateManyAssignedToInputEnvelopeSchema: z.ZodType<Prisma.LeadTaskCreateManyAssignedToInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => LeadTaskCreateManyAssignedToInputSchema),
            z.lazy(() => LeadTaskCreateManyAssignedToInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadTaskCreateManyAssignedToInputEnvelopeSchema
