import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateManyAttachmentInputSchema } from './InboxCreateManyAttachmentInputSchema'

export const InboxCreateManyAttachmentInputEnvelopeSchema: z.ZodType<Prisma.InboxCreateManyAttachmentInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => InboxCreateManyAttachmentInputSchema), z.lazy(() => InboxCreateManyAttachmentInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InboxCreateManyAttachmentInputEnvelopeSchema
