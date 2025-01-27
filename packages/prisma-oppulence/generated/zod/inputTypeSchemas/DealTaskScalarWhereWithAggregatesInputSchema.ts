import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { EnumDealTaskPriorityNullableWithAggregatesFilterSchema } from './EnumDealTaskPriorityNullableWithAggregatesFilterSchema';
import { DealTaskPrioritySchema } from './DealTaskPrioritySchema';
import { EnumDealTaskStatusWithAggregatesFilterSchema } from './EnumDealTaskStatusWithAggregatesFilterSchema';
import { DealTaskStatusSchema } from './DealTaskStatusSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const DealTaskScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DealTaskScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DealTaskScalarWhereWithAggregatesInputSchema),z.lazy(() => DealTaskScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DealTaskScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DealTaskScalarWhereWithAggregatesInputSchema),z.lazy(() => DealTaskScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dealId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dueDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  priority: z.union([ z.lazy(() => EnumDealTaskPriorityNullableWithAggregatesFilterSchema),z.lazy(() => DealTaskPrioritySchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumDealTaskStatusWithAggregatesFilterSchema),z.lazy(() => DealTaskStatusSchema) ]).optional(),
  completedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  assignedToId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default DealTaskScalarWhereWithAggregatesInputSchema;
