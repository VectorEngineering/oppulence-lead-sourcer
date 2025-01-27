import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadDecisionMakerOrderByRelevanceFieldEnumSchema } from './LeadDecisionMakerOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadDecisionMakerOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadDecisionMakerOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadDecisionMakerOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadDecisionMakerOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadDecisionMakerOrderByRelevanceInputSchema;
