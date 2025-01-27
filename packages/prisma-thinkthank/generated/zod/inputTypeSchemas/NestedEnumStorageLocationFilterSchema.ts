import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StorageLocationSchema } from './StorageLocationSchema';

export const NestedEnumStorageLocationFilterSchema: z.ZodType<Prisma.NestedEnumStorageLocationFilter> = z.object({
  equals: z.lazy(() => StorageLocationSchema).optional(),
  in: z.lazy(() => StorageLocationSchema).array().optional(),
  notIn: z.lazy(() => StorageLocationSchema).array().optional(),
  not: z.union([ z.lazy(() => StorageLocationSchema),z.lazy(() => NestedEnumStorageLocationFilterSchema) ]).optional(),
}).strict();

export default NestedEnumStorageLocationFilterSchema;
