import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateManyParentInputSchema } from './InboxCreateManyParentInputSchema'

export const InboxCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.InboxCreateManyParentInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => InboxCreateManyParentInputSchema), z.lazy(() => InboxCreateManyParentInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InboxCreateManyParentInputEnvelopeSchema
