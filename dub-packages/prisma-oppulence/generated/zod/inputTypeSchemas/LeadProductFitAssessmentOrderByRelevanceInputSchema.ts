import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitAssessmentOrderByRelevanceFieldEnumSchema } from './LeadProductFitAssessmentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadProductFitAssessmentOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadProductFitAssessmentOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadProductFitAssessmentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadProductFitAssessmentOrderByRelevanceInputSchema;
