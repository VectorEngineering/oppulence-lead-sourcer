import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineTypeSchema } from './PipelineTypeSchema';
import { ProjectCreateNestedOneWithoutPipelineInputSchema } from './ProjectCreateNestedOneWithoutPipelineInputSchema';
import { PipelineStageCreateNestedManyWithoutPipelineInputSchema } from './PipelineStageCreateNestedManyWithoutPipelineInputSchema';
import { DealCreateNestedManyWithoutPipelineInputSchema } from './DealCreateNestedManyWithoutPipelineInputSchema';
import { PipelineKpiCreateNestedManyWithoutPipelineInputSchema } from './PipelineKpiCreateNestedManyWithoutPipelineInputSchema';
import { PipelineAutomationCreateNestedManyWithoutPipelineInputSchema } from './PipelineAutomationCreateNestedManyWithoutPipelineInputSchema';
import { PipelineIntegrationCreateNestedManyWithoutPipelineInputSchema } from './PipelineIntegrationCreateNestedManyWithoutPipelineInputSchema';
import { PipelineAccessRuleCreateNestedManyWithoutPipelineInputSchema } from './PipelineAccessRuleCreateNestedManyWithoutPipelineInputSchema';

export const PipelineCreateWithoutStageDurationsInputSchema: z.ZodType<Prisma.PipelineCreateWithoutStageDurationsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => PipelineTypeSchema).optional(),
  isActive: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  currency: z.string().optional(),
  defaultStageId: z.string().optional().nullable(),
  pipelineFocus: z.string().optional().nullable(),
  pipelineSegment: z.string().optional().nullable(),
  pipelineCategory: z.string().optional().nullable(),
  pipelineGoal: z.number().optional().nullable(),
  typicalSalesCycle: z.number().int().optional().nullable(),
  averageDealSize: z.number().optional().nullable(),
  averageCloseRate: z.number().optional().nullable(),
  minimumDealSize: z.number().optional().nullable(),
  maximumDealSize: z.number().optional().nullable(),
  targetMarket: z.string().optional().nullable(),
  salesMethodology: z.string().optional().nullable(),
  qualificationCriteria: z.string().optional().nullable(),
  forecastingMethod: z.string().optional().nullable(),
  confidenceScore: z.number().optional().nullable(),
  revenueTarget: z.number().optional().nullable(),
  dealCountTarget: z.number().int().optional().nullable(),
  complianceLevel: z.string().optional().nullable(),
  securityTier: z.string().optional().nullable(),
  dataRetention: z.number().int().optional().nullable(),
  visibilityLevel: z.string().optional().nullable(),
  createdBy: z.string().optional().nullable(),
  updatedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  archivedAt: z.coerce.date().optional().nullable(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutPipelineInputSchema),
  stages: z.lazy(() => PipelineStageCreateNestedManyWithoutPipelineInputSchema).optional(),
  deals: z.lazy(() => DealCreateNestedManyWithoutPipelineInputSchema).optional(),
  kpis: z.lazy(() => PipelineKpiCreateNestedManyWithoutPipelineInputSchema).optional(),
  automations: z.lazy(() => PipelineAutomationCreateNestedManyWithoutPipelineInputSchema).optional(),
  integrations: z.lazy(() => PipelineIntegrationCreateNestedManyWithoutPipelineInputSchema).optional(),
  accessRules: z.lazy(() => PipelineAccessRuleCreateNestedManyWithoutPipelineInputSchema).optional()
}).strict();

export default PipelineCreateWithoutStageDurationsInputSchema;
