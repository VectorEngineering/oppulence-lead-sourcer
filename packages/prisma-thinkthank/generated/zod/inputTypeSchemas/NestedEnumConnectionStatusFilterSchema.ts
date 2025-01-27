import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConnectionStatusSchema } from './ConnectionStatusSchema';

export const NestedEnumConnectionStatusFilterSchema: z.ZodType<Prisma.NestedEnumConnectionStatusFilter> = z.object({
  equals: z.lazy(() => ConnectionStatusSchema).optional(),
  in: z.lazy(() => ConnectionStatusSchema).array().optional(),
  notIn: z.lazy(() => ConnectionStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ConnectionStatusSchema),z.lazy(() => NestedEnumConnectionStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumConnectionStatusFilterSchema;
