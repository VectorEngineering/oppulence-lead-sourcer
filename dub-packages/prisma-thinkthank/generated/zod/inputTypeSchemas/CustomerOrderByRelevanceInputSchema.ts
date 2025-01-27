import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerOrderByRelevanceFieldEnumSchema } from './CustomerOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const CustomerOrderByRelevanceInputSchema: z.ZodType<Prisma.CustomerOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => CustomerOrderByRelevanceFieldEnumSchema),z.lazy(() => CustomerOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default CustomerOrderByRelevanceInputSchema;
