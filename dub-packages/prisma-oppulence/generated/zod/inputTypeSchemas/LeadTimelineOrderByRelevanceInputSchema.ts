import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTimelineOrderByRelevanceFieldEnumSchema } from './LeadTimelineOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadTimelineOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadTimelineOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadTimelineOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadTimelineOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadTimelineOrderByRelevanceInputSchema;
