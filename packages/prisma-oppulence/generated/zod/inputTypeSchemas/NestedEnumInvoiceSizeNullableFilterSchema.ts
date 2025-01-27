import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceSizeSchema } from './InvoiceSizeSchema';

export const NestedEnumInvoiceSizeNullableFilterSchema: z.ZodType<Prisma.NestedEnumInvoiceSizeNullableFilter> = z.object({
  equals: z.lazy(() => InvoiceSizeSchema).optional().nullable(),
  in: z.lazy(() => InvoiceSizeSchema).array().optional().nullable(),
  notIn: z.lazy(() => InvoiceSizeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => InvoiceSizeSchema),z.lazy(() => NestedEnumInvoiceSizeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumInvoiceSizeNullableFilterSchema;
