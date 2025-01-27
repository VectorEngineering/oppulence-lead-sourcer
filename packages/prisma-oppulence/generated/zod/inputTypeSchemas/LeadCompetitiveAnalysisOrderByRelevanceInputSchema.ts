import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveAnalysisOrderByRelevanceFieldEnumSchema } from './LeadCompetitiveAnalysisOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCompetitiveAnalysisOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadCompetitiveAnalysisOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadCompetitiveAnalysisOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadCompetitiveAnalysisOrderByRelevanceInputSchema;
