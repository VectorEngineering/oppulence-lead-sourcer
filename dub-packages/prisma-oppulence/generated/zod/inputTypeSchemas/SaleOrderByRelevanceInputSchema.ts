import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleOrderByRelevanceFieldEnumSchema } from './SaleOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const SaleOrderByRelevanceInputSchema: z.ZodType<Prisma.SaleOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SaleOrderByRelevanceFieldEnumSchema),z.lazy(() => SaleOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default SaleOrderByRelevanceInputSchema;
