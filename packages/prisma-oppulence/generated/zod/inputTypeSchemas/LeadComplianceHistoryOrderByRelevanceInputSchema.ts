import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceHistoryOrderByRelevanceFieldEnumSchema } from './LeadComplianceHistoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadComplianceHistoryOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadComplianceHistoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadComplianceHistoryOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadComplianceHistoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadComplianceHistoryOrderByRelevanceInputSchema;
