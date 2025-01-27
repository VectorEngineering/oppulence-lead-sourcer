import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const AppScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AppScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AppScalarWhereWithAggregatesInputSchema),z.lazy(() => AppScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppScalarWhereWithAggregatesInputSchema),z.lazy(() => AppScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  appId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  config: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  settings: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default AppScalarWhereWithAggregatesInputSchema;
