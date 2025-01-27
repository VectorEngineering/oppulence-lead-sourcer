import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentOrderByRelevanceFieldEnumSchema } from './InvoiceCommentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceCommentOrderByRelevanceInputSchema: z.ZodType<Prisma.InvoiceCommentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => InvoiceCommentOrderByRelevanceFieldEnumSchema),z.lazy(() => InvoiceCommentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default InvoiceCommentOrderByRelevanceInputSchema;
