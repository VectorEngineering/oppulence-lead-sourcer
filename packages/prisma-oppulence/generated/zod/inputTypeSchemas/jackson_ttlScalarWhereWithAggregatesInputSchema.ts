import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BigIntWithAggregatesFilterSchema } from './BigIntWithAggregatesFilterSchema';

export const jackson_ttlScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.jackson_ttlScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => jackson_ttlScalarWhereWithAggregatesInputSchema),z.lazy(() => jackson_ttlScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => jackson_ttlScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => jackson_ttlScalarWhereWithAggregatesInputSchema),z.lazy(() => jackson_ttlScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  key: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
}).strict();

export default jackson_ttlScalarWhereWithAggregatesInputSchema;
