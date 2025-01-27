import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceTemplateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceTemplateAvgOrderByAggregateInput> = z.object({
  taxRate: z.lazy(() => SortOrderSchema).optional(),
  vatRate: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  useCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InvoiceTemplateAvgOrderByAggregateInputSchema;
