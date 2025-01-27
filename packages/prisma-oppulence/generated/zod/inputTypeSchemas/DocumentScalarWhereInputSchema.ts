import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const DocumentScalarWhereInputSchema: z.ZodType<Prisma.DocumentScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => DocumentScalarWhereInputSchema), z.lazy(() => DocumentScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => DocumentScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => DocumentScalarWhereInputSchema), z.lazy(() => DocumentScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        body: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
        name: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        objectId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        ownerId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        parentId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        pathTokens: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        tag: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        projectId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        title: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        type: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        size: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        mimeType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        isConfidential: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        documentType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        version: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        expiryDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        shareableLink: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default DocumentScalarWhereInputSchema
