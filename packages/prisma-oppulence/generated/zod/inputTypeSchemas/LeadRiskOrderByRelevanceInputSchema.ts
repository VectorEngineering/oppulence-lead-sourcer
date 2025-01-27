import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadRiskOrderByRelevanceFieldEnumSchema } from './LeadRiskOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadRiskOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadRiskOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadRiskOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadRiskOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadRiskOrderByRelevanceInputSchema;
