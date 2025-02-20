import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagCreateManyProjectInputSchema } from './TagCreateManyProjectInputSchema'

export const TagCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.TagCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => TagCreateManyProjectInputSchema), z.lazy(() => TagCreateManyProjectInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default TagCreateManyProjectInputEnvelopeSchema
