import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadNurturingOrderByRelevanceFieldEnumSchema } from './LeadNurturingOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadNurturingOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadNurturingOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadNurturingOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadNurturingOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadNurturingOrderByRelevanceInputSchema;
