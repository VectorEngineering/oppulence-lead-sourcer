import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const DocumentCommentScalarWhereInputSchema: z.ZodType<Prisma.DocumentCommentScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => DocumentCommentScalarWhereInputSchema), z.lazy(() => DocumentCommentScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => DocumentCommentScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => DocumentCommentScalarWhereInputSchema), z.lazy(() => DocumentCommentScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        documentId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        parentCommentId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        updatedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default DocumentCommentScalarWhereInputSchema
