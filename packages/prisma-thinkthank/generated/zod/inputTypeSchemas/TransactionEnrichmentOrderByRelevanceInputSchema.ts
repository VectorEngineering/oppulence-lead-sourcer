import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionEnrichmentOrderByRelevanceFieldEnumSchema } from './TransactionEnrichmentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TransactionEnrichmentOrderByRelevanceInputSchema: z.ZodType<Prisma.TransactionEnrichmentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TransactionEnrichmentOrderByRelevanceFieldEnumSchema),z.lazy(() => TransactionEnrichmentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TransactionEnrichmentOrderByRelevanceInputSchema;
