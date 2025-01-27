import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreOrderByRelevanceFieldEnumSchema } from './LeadScoreOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadScoreOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadScoreOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadScoreOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadScoreOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadScoreOrderByRelevanceInputSchema;
