import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountOrderByRelevanceFieldEnumSchema } from './DiscountOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DiscountOrderByRelevanceInputSchema: z.ZodType<Prisma.DiscountOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DiscountOrderByRelevanceFieldEnumSchema),z.lazy(() => DiscountOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DiscountOrderByRelevanceInputSchema;
