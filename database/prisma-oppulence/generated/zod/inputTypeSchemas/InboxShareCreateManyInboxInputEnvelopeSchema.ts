import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxShareCreateManyInboxInputSchema } from './InboxShareCreateManyInboxInputSchema'

export const InboxShareCreateManyInboxInputEnvelopeSchema: z.ZodType<Prisma.InboxShareCreateManyInboxInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => InboxShareCreateManyInboxInputSchema), z.lazy(() => InboxShareCreateManyInboxInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InboxShareCreateManyInboxInputEnvelopeSchema
