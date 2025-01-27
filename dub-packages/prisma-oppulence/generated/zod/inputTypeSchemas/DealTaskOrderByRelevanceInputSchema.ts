import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealTaskOrderByRelevanceFieldEnumSchema } from './DealTaskOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DealTaskOrderByRelevanceInputSchema: z.ZodType<Prisma.DealTaskOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DealTaskOrderByRelevanceFieldEnumSchema),z.lazy(() => DealTaskOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DealTaskOrderByRelevanceInputSchema;
