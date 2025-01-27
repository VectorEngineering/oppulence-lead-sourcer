import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { EnumInvoiceCommentTypeWithAggregatesFilterSchema } from './EnumInvoiceCommentTypeWithAggregatesFilterSchema'
import { InvoiceCommentTypeSchema } from './InvoiceCommentTypeSchema'
import { EnumInvoiceCommentVisibilityWithAggregatesFilterSchema } from './EnumInvoiceCommentVisibilityWithAggregatesFilterSchema'
import { InvoiceCommentVisibilitySchema } from './InvoiceCommentVisibilitySchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const InvoiceCommentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InvoiceCommentScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => InvoiceCommentScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InvoiceCommentScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => InvoiceCommentScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InvoiceCommentScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InvoiceCommentScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        invoiceId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => EnumInvoiceCommentTypeWithAggregatesFilterSchema), z.lazy(() => InvoiceCommentTypeSchema)]).optional(),
        visibility: z
            .union([z.lazy(() => EnumInvoiceCommentVisibilityWithAggregatesFilterSchema), z.lazy(() => InvoiceCommentVisibilitySchema)])
            .optional(),
        title: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        priority: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        tags: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        attachments: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        mentions: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        formatting: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        parentId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        threadPath: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        replyCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        isEdited: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        editedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastReplyAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        resolvedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        resolvedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        updatedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default InvoiceCommentScalarWhereWithAggregatesInputSchema
