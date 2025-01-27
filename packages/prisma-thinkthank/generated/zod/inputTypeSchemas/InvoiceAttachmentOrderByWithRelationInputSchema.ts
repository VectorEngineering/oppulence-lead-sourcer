import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { InvoiceOrderByWithRelationInputSchema } from './InvoiceOrderByWithRelationInputSchema';
import { InvoiceAttachmentOrderByRelevanceInputSchema } from './InvoiceAttachmentOrderByRelevanceInputSchema';

export const InvoiceAttachmentOrderByWithRelationInputSchema: z.ZodType<Prisma.InvoiceAttachmentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  invoiceId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  size: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mimeType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  invoice: z.lazy(() => InvoiceOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => InvoiceAttachmentOrderByRelevanceInputSchema).optional()
}).strict();

export default InvoiceAttachmentOrderByWithRelationInputSchema;
