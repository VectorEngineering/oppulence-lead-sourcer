import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const CustomerTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CustomerTagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CustomerTagScalarWhereWithAggregatesInputSchema),z.lazy(() => CustomerTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CustomerTagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CustomerTagScalarWhereWithAggregatesInputSchema),z.lazy(() => CustomerTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  customerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default CustomerTagScalarWhereWithAggregatesInputSchema;
