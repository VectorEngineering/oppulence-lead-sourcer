import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const DocumentAnnotationScalarWhereInputSchema: z.ZodType<Prisma.DocumentAnnotationScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => DocumentAnnotationScalarWhereInputSchema), z.lazy(() => DocumentAnnotationScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => DocumentAnnotationScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => DocumentAnnotationScalarWhereInputSchema), z.lazy(() => DocumentAnnotationScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        documentId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        pageNumber: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        coordinates: z.lazy(() => JsonNullableFilterSchema).optional(),
        color: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default DocumentAnnotationScalarWhereInputSchema
