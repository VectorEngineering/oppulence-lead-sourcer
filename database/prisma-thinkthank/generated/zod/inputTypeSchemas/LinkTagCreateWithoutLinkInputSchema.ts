import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagCreateNestedOneWithoutLinksInputSchema } from './TagCreateNestedOneWithoutLinksInputSchema'

export const LinkTagCreateWithoutLinkInputSchema: z.ZodType<Prisma.LinkTagCreateWithoutLinkInput> = z
    .object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        tag: z.lazy(() => TagCreateNestedOneWithoutLinksInputSchema)
    })
    .strict()

export default LinkTagCreateWithoutLinkInputSchema
