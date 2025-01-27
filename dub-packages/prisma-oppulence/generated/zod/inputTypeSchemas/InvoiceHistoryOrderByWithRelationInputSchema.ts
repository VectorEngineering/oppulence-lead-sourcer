import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { InvoiceOrderByWithRelationInputSchema } from './InvoiceOrderByWithRelationInputSchema';
import { InvoiceHistoryOrderByRelevanceInputSchema } from './InvoiceHistoryOrderByRelevanceInputSchema';

export const InvoiceHistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.InvoiceHistoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  invoiceId: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  changes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  invoice: z.lazy(() => InvoiceOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => InvoiceHistoryOrderByRelevanceInputSchema).optional()
}).strict();

export default InvoiceHistoryOrderByWithRelationInputSchema;
