import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetOrderByRelevanceFieldEnumSchema } from './LeadBudgetOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadBudgetOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadBudgetOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadBudgetOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadBudgetOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadBudgetOrderByRelevanceInputSchema;
