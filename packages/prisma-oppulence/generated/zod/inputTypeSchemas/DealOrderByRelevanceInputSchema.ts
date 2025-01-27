import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealOrderByRelevanceFieldEnumSchema } from './DealOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DealOrderByRelevanceInputSchema: z.ZodType<Prisma.DealOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DealOrderByRelevanceFieldEnumSchema),z.lazy(() => DealOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DealOrderByRelevanceInputSchema;
