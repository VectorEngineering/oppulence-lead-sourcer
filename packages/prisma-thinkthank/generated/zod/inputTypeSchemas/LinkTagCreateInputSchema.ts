import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateNestedOneWithoutTagsInputSchema } from './LinkCreateNestedOneWithoutTagsInputSchema'
import { TagCreateNestedOneWithoutLinksInputSchema } from './TagCreateNestedOneWithoutLinksInputSchema'

export const LinkTagCreateInputSchema: z.ZodType<Prisma.LinkTagCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        link: z.lazy(() => LinkCreateNestedOneWithoutTagsInputSchema),
        tag: z.lazy(() => TagCreateNestedOneWithoutLinksInputSchema)
    })
    .strict()

export default LinkTagCreateInputSchema
