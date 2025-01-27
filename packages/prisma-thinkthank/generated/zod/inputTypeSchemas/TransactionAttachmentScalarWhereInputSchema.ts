import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const TransactionAttachmentScalarWhereInputSchema: z.ZodType<Prisma.TransactionAttachmentScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => TransactionAttachmentScalarWhereInputSchema),
                z.lazy(() => TransactionAttachmentScalarWhereInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => TransactionAttachmentScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => TransactionAttachmentScalarWhereInputSchema),
                z.lazy(() => TransactionAttachmentScalarWhereInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        transactionId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z
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
        category: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        path: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        size: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        mimeType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        hash: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
        isConfidential: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        status: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        processingErrors: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        ocrText: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        analysisResults: z.lazy(() => JsonNullableFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        blob: z.lazy(() => JsonNullableFilterSchema).optional()
    })
    .strict()

export default TransactionAttachmentScalarWhereInputSchema
