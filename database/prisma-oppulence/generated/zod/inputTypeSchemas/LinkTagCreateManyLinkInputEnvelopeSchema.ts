import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkTagCreateManyLinkInputSchema } from './LinkTagCreateManyLinkInputSchema'

export const LinkTagCreateManyLinkInputEnvelopeSchema: z.ZodType<Prisma.LinkTagCreateManyLinkInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LinkTagCreateManyLinkInputSchema), z.lazy(() => LinkTagCreateManyLinkInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LinkTagCreateManyLinkInputEnvelopeSchema
