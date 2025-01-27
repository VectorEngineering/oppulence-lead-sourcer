import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitorOrderByRelevanceFieldEnumSchema } from './LeadCompetitorOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCompetitorOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadCompetitorOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadCompetitorOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadCompetitorOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadCompetitorOrderByRelevanceInputSchema;
