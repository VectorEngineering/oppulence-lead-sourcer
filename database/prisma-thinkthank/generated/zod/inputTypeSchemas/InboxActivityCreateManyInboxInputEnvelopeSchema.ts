import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxActivityCreateManyInboxInputSchema } from './InboxActivityCreateManyInboxInputSchema'

export const InboxActivityCreateManyInboxInputEnvelopeSchema: z.ZodType<Prisma.InboxActivityCreateManyInboxInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => InboxActivityCreateManyInboxInputSchema),
            z.lazy(() => InboxActivityCreateManyInboxInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InboxActivityCreateManyInboxInputEnvelopeSchema
