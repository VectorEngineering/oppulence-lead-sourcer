import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceOrderByRelevanceFieldEnumSchema } from './InvoiceOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceOrderByRelevanceInputSchema: z.ZodType<Prisma.InvoiceOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => InvoiceOrderByRelevanceFieldEnumSchema),z.lazy(() => InvoiceOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default InvoiceOrderByRelevanceInputSchema;
