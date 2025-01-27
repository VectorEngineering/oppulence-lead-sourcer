import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationHistoryOrderByRelevanceFieldEnumSchema } from './LeadSegmentationHistoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadSegmentationHistoryOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadSegmentationHistoryOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadSegmentationHistoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadSegmentationHistoryOrderByRelevanceInputSchema;
