import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealHistoryOrderByRelevanceFieldEnumSchema } from './DealHistoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DealHistoryOrderByRelevanceInputSchema: z.ZodType<Prisma.DealHistoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DealHistoryOrderByRelevanceFieldEnumSchema),z.lazy(() => DealHistoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DealHistoryOrderByRelevanceInputSchema;
