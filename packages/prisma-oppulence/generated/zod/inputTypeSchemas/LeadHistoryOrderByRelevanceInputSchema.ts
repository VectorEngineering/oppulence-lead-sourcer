import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadHistoryOrderByRelevanceFieldEnumSchema } from './LeadHistoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadHistoryOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadHistoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadHistoryOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadHistoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadHistoryOrderByRelevanceInputSchema;
