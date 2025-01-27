import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitOrderByRelevanceFieldEnumSchema } from './LeadProductFitOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadProductFitOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadProductFitOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadProductFitOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadProductFitOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadProductFitOrderByRelevanceInputSchema;
