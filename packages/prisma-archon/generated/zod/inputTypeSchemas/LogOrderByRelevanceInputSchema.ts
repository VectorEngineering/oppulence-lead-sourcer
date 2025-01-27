import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LogOrderByRelevanceFieldEnumSchema } from './LogOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LogOrderByRelevanceInputSchema: z.ZodType<Prisma.LogOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LogOrderByRelevanceFieldEnumSchema),z.lazy(() => LogOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LogOrderByRelevanceInputSchema;
