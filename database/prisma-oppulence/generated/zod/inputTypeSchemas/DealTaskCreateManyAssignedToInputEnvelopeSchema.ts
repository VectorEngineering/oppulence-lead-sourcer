import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskCreateManyAssignedToInputSchema } from './DealTaskCreateManyAssignedToInputSchema'

export const DealTaskCreateManyAssignedToInputEnvelopeSchema: z.ZodType<Prisma.DealTaskCreateManyAssignedToInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => DealTaskCreateManyAssignedToInputSchema),
            z.lazy(() => DealTaskCreateManyAssignedToInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealTaskCreateManyAssignedToInputEnvelopeSchema
