import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceDeliveryTypeSchema } from './InvoiceDeliveryTypeSchema';
import { NestedEnumInvoiceDeliveryTypeFilterSchema } from './NestedEnumInvoiceDeliveryTypeFilterSchema';

export const EnumInvoiceDeliveryTypeFilterSchema: z.ZodType<Prisma.EnumInvoiceDeliveryTypeFilter> = z.object({
  equals: z.lazy(() => InvoiceDeliveryTypeSchema).optional(),
  in: z.lazy(() => InvoiceDeliveryTypeSchema).array().optional(),
  notIn: z.lazy(() => InvoiceDeliveryTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => InvoiceDeliveryTypeSchema),z.lazy(() => NestedEnumInvoiceDeliveryTypeFilterSchema) ]).optional(),
}).strict();

export default EnumInvoiceDeliveryTypeFilterSchema;
