import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LinkTagCreateManyTagInputSchema: z.ZodType<Prisma.LinkTagCreateManyTagInput> = z
    .object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        linkId: z.string()
    })
    .strict()

export default LinkTagCreateManyTagInputSchema
