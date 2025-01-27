import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { ProjectCreateNestedOneWithoutTagsInputSchema } from './ProjectCreateNestedOneWithoutTagsInputSchema'
import { CustomerTagCreateNestedManyWithoutTagInputSchema } from './CustomerTagCreateNestedManyWithoutTagInputSchema'
import { LeadCreateNestedManyWithoutTagsInputSchema } from './LeadCreateNestedManyWithoutTagsInputSchema'

export const TagCreateWithoutLinksInputSchema: z.ZodType<Prisma.TagCreateWithoutLinksInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        color: z.string().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        context: z.string().optional().nullable(),
        confidence: z.number().optional().nullable(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        project: z.lazy(() => ProjectCreateNestedOneWithoutTagsInputSchema),
        CustomerTag: z.lazy(() => CustomerTagCreateNestedManyWithoutTagInputSchema).optional(),
        Lead: z.lazy(() => LeadCreateNestedManyWithoutTagsInputSchema).optional()
    })
    .strict()

export default TagCreateWithoutLinksInputSchema
