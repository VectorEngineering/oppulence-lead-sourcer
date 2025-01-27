import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  defaultStageId: z.lazy(() => SortOrderSchema).optional(),
  pipelineFocus: z.lazy(() => SortOrderSchema).optional(),
  pipelineSegment: z.lazy(() => SortOrderSchema).optional(),
  pipelineCategory: z.lazy(() => SortOrderSchema).optional(),
  pipelineGoal: z.lazy(() => SortOrderSchema).optional(),
  typicalSalesCycle: z.lazy(() => SortOrderSchema).optional(),
  averageDealSize: z.lazy(() => SortOrderSchema).optional(),
  averageCloseRate: z.lazy(() => SortOrderSchema).optional(),
  minimumDealSize: z.lazy(() => SortOrderSchema).optional(),
  maximumDealSize: z.lazy(() => SortOrderSchema).optional(),
  targetMarket: z.lazy(() => SortOrderSchema).optional(),
  salesMethodology: z.lazy(() => SortOrderSchema).optional(),
  qualificationCriteria: z.lazy(() => SortOrderSchema).optional(),
  forecastingMethod: z.lazy(() => SortOrderSchema).optional(),
  confidenceScore: z.lazy(() => SortOrderSchema).optional(),
  revenueTarget: z.lazy(() => SortOrderSchema).optional(),
  dealCountTarget: z.lazy(() => SortOrderSchema).optional(),
  complianceLevel: z.lazy(() => SortOrderSchema).optional(),
  securityTier: z.lazy(() => SortOrderSchema).optional(),
  dataRetention: z.lazy(() => SortOrderSchema).optional(),
  visibilityLevel: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  updatedBy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  archivedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PipelineMaxOrderByAggregateInputSchema;
