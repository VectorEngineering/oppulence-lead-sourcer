import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceHistoryOrderByRelevanceFieldEnumSchema } from './InvoiceHistoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceHistoryOrderByRelevanceInputSchema: z.ZodType<Prisma.InvoiceHistoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => InvoiceHistoryOrderByRelevanceFieldEnumSchema),z.lazy(() => InvoiceHistoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default InvoiceHistoryOrderByRelevanceInputSchema;
