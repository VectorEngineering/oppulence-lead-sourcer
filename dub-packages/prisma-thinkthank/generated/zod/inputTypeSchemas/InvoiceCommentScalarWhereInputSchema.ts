import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumInvoiceCommentTypeFilterSchema } from './EnumInvoiceCommentTypeFilterSchema';
import { InvoiceCommentTypeSchema } from './InvoiceCommentTypeSchema';
import { EnumInvoiceCommentVisibilityFilterSchema } from './EnumInvoiceCommentVisibilityFilterSchema';
import { InvoiceCommentVisibilitySchema } from './InvoiceCommentVisibilitySchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const InvoiceCommentScalarWhereInputSchema: z.ZodType<Prisma.InvoiceCommentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InvoiceCommentScalarWhereInputSchema),z.lazy(() => InvoiceCommentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvoiceCommentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvoiceCommentScalarWhereInputSchema),z.lazy(() => InvoiceCommentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  invoiceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumInvoiceCommentTypeFilterSchema),z.lazy(() => InvoiceCommentTypeSchema) ]).optional(),
  visibility: z.union([ z.lazy(() => EnumInvoiceCommentVisibilityFilterSchema),z.lazy(() => InvoiceCommentVisibilitySchema) ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  priority: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tags: z.lazy(() => JsonNullableFilterSchema).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  attachments: z.lazy(() => JsonNullableFilterSchema).optional(),
  mentions: z.lazy(() => JsonNullableFilterSchema).optional(),
  formatting: z.lazy(() => JsonNullableFilterSchema).optional(),
  parentId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  threadPath: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  replyCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  isEdited: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  editedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lastReplyAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  resolvedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  resolvedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default InvoiceCommentScalarWhereInputSchema;
