import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceSizeSchema } from './InvoiceSizeSchema';
import { NestedEnumInvoiceSizeNullableFilterSchema } from './NestedEnumInvoiceSizeNullableFilterSchema';

export const EnumInvoiceSizeNullableFilterSchema: z.ZodType<Prisma.EnumInvoiceSizeNullableFilter> = z.object({
  equals: z.lazy(() => InvoiceSizeSchema).optional().nullable(),
  in: z.lazy(() => InvoiceSizeSchema).array().optional().nullable(),
  notIn: z.lazy(() => InvoiceSizeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => InvoiceSizeSchema),z.lazy(() => NestedEnumInvoiceSizeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumInvoiceSizeNullableFilterSchema;
