import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadPersonalDetailsOrderByRelevanceFieldEnumSchema } from './LeadPersonalDetailsOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadPersonalDetailsOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadPersonalDetailsOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadPersonalDetailsOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadPersonalDetailsOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadPersonalDetailsOrderByRelevanceInputSchema;
