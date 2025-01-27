import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LinkTagCreateManyLinkInputSchema: z.ZodType<Prisma.LinkTagCreateManyLinkInput> = z
    .object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        tagId: z.string()
    })
    .strict()

export default LinkTagCreateManyLinkInputSchema
