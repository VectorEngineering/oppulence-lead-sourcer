import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { PipelineStageOrderByRelationAggregateInputSchema } from './PipelineStageOrderByRelationAggregateInputSchema';
import { DealOrderByRelationAggregateInputSchema } from './DealOrderByRelationAggregateInputSchema';
import { PipelineKpiOrderByRelationAggregateInputSchema } from './PipelineKpiOrderByRelationAggregateInputSchema';
import { PipelineAutomationOrderByRelationAggregateInputSchema } from './PipelineAutomationOrderByRelationAggregateInputSchema';
import { StageDurationOrderByRelationAggregateInputSchema } from './StageDurationOrderByRelationAggregateInputSchema';
import { PipelineIntegrationOrderByRelationAggregateInputSchema } from './PipelineIntegrationOrderByRelationAggregateInputSchema';
import { PipelineAccessRuleOrderByRelationAggregateInputSchema } from './PipelineAccessRuleOrderByRelationAggregateInputSchema';
import { PipelineOrderByRelevanceInputSchema } from './PipelineOrderByRelevanceInputSchema';

export const PipelineOrderByWithRelationInputSchema: z.ZodType<Prisma.PipelineOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  defaultStageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pipelineFocus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pipelineSegment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pipelineCategory: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pipelineGoal: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  typicalSalesCycle: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  averageDealSize: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  averageCloseRate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  minimumDealSize: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  maximumDealSize: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  targetMarket: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  salesMethodology: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  qualificationCriteria: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  forecastingMethod: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  confidenceScore: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  revenueTarget: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dealCountTarget: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  complianceLevel: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  securityTier: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dataRetention: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  visibilityLevel: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  archivedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  stages: z.lazy(() => PipelineStageOrderByRelationAggregateInputSchema).optional(),
  deals: z.lazy(() => DealOrderByRelationAggregateInputSchema).optional(),
  kpis: z.lazy(() => PipelineKpiOrderByRelationAggregateInputSchema).optional(),
  automations: z.lazy(() => PipelineAutomationOrderByRelationAggregateInputSchema).optional(),
  stageDurations: z.lazy(() => StageDurationOrderByRelationAggregateInputSchema).optional(),
  integrations: z.lazy(() => PipelineIntegrationOrderByRelationAggregateInputSchema).optional(),
  accessRules: z.lazy(() => PipelineAccessRuleOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => PipelineOrderByRelevanceInputSchema).optional()
}).strict();

export default PipelineOrderByWithRelationInputSchema;
