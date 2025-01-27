import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { jackson_ttlOrderByRelevanceFieldEnumSchema } from './jackson_ttlOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const jackson_ttlOrderByRelevanceInputSchema: z.ZodType<Prisma.jackson_ttlOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => jackson_ttlOrderByRelevanceFieldEnumSchema),z.lazy(() => jackson_ttlOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default jackson_ttlOrderByRelevanceInputSchema;
