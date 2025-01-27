import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateManyProjectInputSchema } from './InboxCreateManyProjectInputSchema'

export const InboxCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.InboxCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => InboxCreateManyProjectInputSchema), z.lazy(() => InboxCreateManyProjectInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InboxCreateManyProjectInputEnvelopeSchema
