import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LeadProductFitAssessmentCountOrderByAggregateInputSchema } from './LeadProductFitAssessmentCountOrderByAggregateInputSchema';
import { LeadProductFitAssessmentMaxOrderByAggregateInputSchema } from './LeadProductFitAssessmentMaxOrderByAggregateInputSchema';
import { LeadProductFitAssessmentMinOrderByAggregateInputSchema } from './LeadProductFitAssessmentMinOrderByAggregateInputSchema';

export const LeadProductFitAssessmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  productFitId: z.lazy(() => SortOrderSchema).optional(),
  assessor: z.lazy(() => SortOrderSchema).optional(),
  scores: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadProductFitAssessmentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadProductFitAssessmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadProductFitAssessmentMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadProductFitAssessmentOrderByWithAggregationInputSchema;
