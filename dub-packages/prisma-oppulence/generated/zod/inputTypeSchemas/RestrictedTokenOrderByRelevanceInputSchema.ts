import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenOrderByRelevanceFieldEnumSchema } from './RestrictedTokenOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const RestrictedTokenOrderByRelevanceInputSchema: z.ZodType<Prisma.RestrictedTokenOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => RestrictedTokenOrderByRelevanceFieldEnumSchema),z.lazy(() => RestrictedTokenOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default RestrictedTokenOrderByRelevanceInputSchema;
