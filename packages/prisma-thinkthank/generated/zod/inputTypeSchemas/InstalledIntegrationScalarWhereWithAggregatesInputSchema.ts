import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';

export const InstalledIntegrationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InstalledIntegrationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InstalledIntegrationScalarWhereWithAggregatesInputSchema),z.lazy(() => InstalledIntegrationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstalledIntegrationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstalledIntegrationScalarWhereWithAggregatesInputSchema),z.lazy(() => InstalledIntegrationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  integrationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  credentials: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional()
}).strict();

export default InstalledIntegrationScalarWhereWithAggregatesInputSchema;
