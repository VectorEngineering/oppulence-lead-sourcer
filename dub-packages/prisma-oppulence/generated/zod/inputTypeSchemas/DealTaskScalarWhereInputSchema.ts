import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumDealTaskPriorityNullableFilterSchema } from './EnumDealTaskPriorityNullableFilterSchema';
import { DealTaskPrioritySchema } from './DealTaskPrioritySchema';
import { EnumDealTaskStatusFilterSchema } from './EnumDealTaskStatusFilterSchema';
import { DealTaskStatusSchema } from './DealTaskStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const DealTaskScalarWhereInputSchema: z.ZodType<Prisma.DealTaskScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DealTaskScalarWhereInputSchema),z.lazy(() => DealTaskScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DealTaskScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DealTaskScalarWhereInputSchema),z.lazy(() => DealTaskScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dealId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dueDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  priority: z.union([ z.lazy(() => EnumDealTaskPriorityNullableFilterSchema),z.lazy(() => DealTaskPrioritySchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumDealTaskStatusFilterSchema),z.lazy(() => DealTaskStatusSchema) ]).optional(),
  completedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  assignedToId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default DealTaskScalarWhereInputSchema;
