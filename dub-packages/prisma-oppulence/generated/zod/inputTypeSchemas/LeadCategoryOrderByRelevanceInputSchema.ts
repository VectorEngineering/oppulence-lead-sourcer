import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCategoryOrderByRelevanceFieldEnumSchema } from './LeadCategoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCategoryOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadCategoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadCategoryOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadCategoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadCategoryOrderByRelevanceInputSchema;
