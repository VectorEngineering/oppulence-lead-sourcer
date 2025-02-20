import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InvoiceHistoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InvoiceHistoryOrderByRelationAggregateInputSchema;
