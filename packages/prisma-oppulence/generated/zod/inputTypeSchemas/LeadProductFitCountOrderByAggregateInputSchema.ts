import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadProductFitCountOrderByAggregateInputSchema: z.ZodType<Prisma.LeadProductFitCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  technicalFit: z.lazy(() => SortOrderSchema).optional(),
  businessFit: z.lazy(() => SortOrderSchema).optional(),
  culturalFit: z.lazy(() => SortOrderSchema).optional(),
  budgetFit: z.lazy(() => SortOrderSchema).optional(),
  overallFit: z.lazy(() => SortOrderSchema).optional(),
  strengthsWeaknesses: z.lazy(() => SortOrderSchema).optional(),
  customizationNeeds: z.lazy(() => SortOrderSchema).optional(),
  implementationComplexity: z.lazy(() => SortOrderSchema).optional(),
  requiredFeatures: z.lazy(() => SortOrderSchema).optional(),
  optionalFeatures: z.lazy(() => SortOrderSchema).optional(),
  dealBreakers: z.lazy(() => SortOrderSchema).optional(),
  integrationComplexity: z.lazy(() => SortOrderSchema).optional(),
  integrationRisks: z.lazy(() => SortOrderSchema).optional(),
  integrationCosts: z.lazy(() => SortOrderSchema).optional(),
  implementationTimeline: z.lazy(() => SortOrderSchema).optional(),
  trainingNeeds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadProductFitCountOrderByAggregateInputSchema;
