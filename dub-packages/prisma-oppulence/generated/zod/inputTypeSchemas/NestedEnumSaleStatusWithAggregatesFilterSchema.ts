import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleStatusSchema } from './SaleStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumSaleStatusFilterSchema } from './NestedEnumSaleStatusFilterSchema';

export const NestedEnumSaleStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSaleStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SaleStatusSchema).optional(),
  in: z.lazy(() => SaleStatusSchema).array().optional(),
  notIn: z.lazy(() => SaleStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => SaleStatusSchema),z.lazy(() => NestedEnumSaleStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSaleStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSaleStatusFilterSchema).optional()
}).strict();

export default NestedEnumSaleStatusWithAggregatesFilterSchema;
