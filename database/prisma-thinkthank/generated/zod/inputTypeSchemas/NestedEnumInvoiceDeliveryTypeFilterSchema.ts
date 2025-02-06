import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceDeliveryTypeSchema } from './InvoiceDeliveryTypeSchema';

export const NestedEnumInvoiceDeliveryTypeFilterSchema: z.ZodType<Prisma.NestedEnumInvoiceDeliveryTypeFilter> = z.object({
  equals: z.lazy(() => InvoiceDeliveryTypeSchema).optional(),
  in: z.lazy(() => InvoiceDeliveryTypeSchema).array().optional(),
  notIn: z.lazy(() => InvoiceDeliveryTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => InvoiceDeliveryTypeSchema),z.lazy(() => NestedEnumInvoiceDeliveryTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumInvoiceDeliveryTypeFilterSchema;
