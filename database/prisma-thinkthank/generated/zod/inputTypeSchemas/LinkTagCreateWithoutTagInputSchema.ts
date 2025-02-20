import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateNestedOneWithoutTagsInputSchema } from './LinkCreateNestedOneWithoutTagsInputSchema'

export const LinkTagCreateWithoutTagInputSchema: z.ZodType<Prisma.LinkTagCreateWithoutTagInput> = z
    .object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        link: z.lazy(() => LinkCreateNestedOneWithoutTagsInputSchema)
    })
    .strict()

export default LinkTagCreateWithoutTagInputSchema
