import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleStatusSchema } from './SaleStatusSchema';
import { NestedEnumSaleStatusFilterSchema } from './NestedEnumSaleStatusFilterSchema';

export const EnumSaleStatusFilterSchema: z.ZodType<Prisma.EnumSaleStatusFilter> = z.object({
  equals: z.lazy(() => SaleStatusSchema).optional(),
  in: z.lazy(() => SaleStatusSchema).array().optional(),
  notIn: z.lazy(() => SaleStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => SaleStatusSchema),z.lazy(() => NestedEnumSaleStatusFilterSchema) ]).optional(),
}).strict();

export default EnumSaleStatusFilterSchema;
