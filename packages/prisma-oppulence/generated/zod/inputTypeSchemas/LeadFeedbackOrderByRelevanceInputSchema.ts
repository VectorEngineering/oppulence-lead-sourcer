import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadFeedbackOrderByRelevanceFieldEnumSchema } from './LeadFeedbackOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadFeedbackOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadFeedbackOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadFeedbackOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadFeedbackOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadFeedbackOrderByRelevanceInputSchema;
