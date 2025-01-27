import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { LinkTagCreateNestedManyWithoutTagInputSchema } from './LinkTagCreateNestedManyWithoutTagInputSchema'
import { CustomerTagCreateNestedManyWithoutTagInputSchema } from './CustomerTagCreateNestedManyWithoutTagInputSchema'
import { LeadCreateNestedManyWithoutTagsInputSchema } from './LeadCreateNestedManyWithoutTagsInputSchema'

export const TagCreateWithoutProjectInputSchema: z.ZodType<Prisma.TagCreateWithoutProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        color: z.string().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        context: z.string().optional().nullable(),
        confidence: z.number().optional().nullable(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        links: z.lazy(() => LinkTagCreateNestedManyWithoutTagInputSchema).optional(),
        CustomerTag: z.lazy(() => CustomerTagCreateNestedManyWithoutTagInputSchema).optional(),
        Lead: z.lazy(() => LeadCreateNestedManyWithoutTagsInputSchema).optional()
    })
    .strict()

export default TagCreateWithoutProjectInputSchema
