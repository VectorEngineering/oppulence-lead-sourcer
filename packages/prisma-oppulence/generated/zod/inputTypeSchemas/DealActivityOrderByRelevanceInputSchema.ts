import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealActivityOrderByRelevanceFieldEnumSchema } from './DealActivityOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DealActivityOrderByRelevanceInputSchema: z.ZodType<Prisma.DealActivityOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DealActivityOrderByRelevanceFieldEnumSchema),z.lazy(() => DealActivityOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DealActivityOrderByRelevanceInputSchema;
