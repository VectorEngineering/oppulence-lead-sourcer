import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const InvoiceHistoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InvoiceHistoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InvoiceHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => InvoiceHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvoiceHistoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvoiceHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => InvoiceHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  invoiceId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  changes: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default InvoiceHistoryScalarWhereWithAggregatesInputSchema;
