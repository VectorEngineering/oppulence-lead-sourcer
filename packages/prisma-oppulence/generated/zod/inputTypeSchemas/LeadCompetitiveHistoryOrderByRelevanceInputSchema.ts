import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveHistoryOrderByRelevanceFieldEnumSchema } from './LeadCompetitiveHistoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCompetitiveHistoryOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadCompetitiveHistoryOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadCompetitiveHistoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadCompetitiveHistoryOrderByRelevanceInputSchema;
