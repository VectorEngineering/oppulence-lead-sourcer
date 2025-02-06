import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceSizeSchema } from './InvoiceSizeSchema';
import { NestedEnumInvoiceSizeNullableWithAggregatesFilterSchema } from './NestedEnumInvoiceSizeNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumInvoiceSizeNullableFilterSchema } from './NestedEnumInvoiceSizeNullableFilterSchema';

export const EnumInvoiceSizeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumInvoiceSizeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => InvoiceSizeSchema).optional().nullable(),
  in: z.lazy(() => InvoiceSizeSchema).array().optional().nullable(),
  notIn: z.lazy(() => InvoiceSizeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => InvoiceSizeSchema),z.lazy(() => NestedEnumInvoiceSizeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumInvoiceSizeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumInvoiceSizeNullableFilterSchema).optional()
}).strict();

export default EnumInvoiceSizeNullableWithAggregatesFilterSchema;
