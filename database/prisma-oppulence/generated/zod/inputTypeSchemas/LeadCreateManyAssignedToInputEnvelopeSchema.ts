import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateManyAssignedToInputSchema } from './LeadCreateManyAssignedToInputSchema'

export const LeadCreateManyAssignedToInputEnvelopeSchema: z.ZodType<Prisma.LeadCreateManyAssignedToInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LeadCreateManyAssignedToInputSchema), z.lazy(() => LeadCreateManyAssignedToInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadCreateManyAssignedToInputEnvelopeSchema
