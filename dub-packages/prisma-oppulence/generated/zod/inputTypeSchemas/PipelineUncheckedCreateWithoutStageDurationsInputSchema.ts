import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineTypeSchema } from './PipelineTypeSchema';
import { PipelineStageUncheckedCreateNestedManyWithoutPipelineInputSchema } from './PipelineStageUncheckedCreateNestedManyWithoutPipelineInputSchema';
import { DealUncheckedCreateNestedManyWithoutPipelineInputSchema } from './DealUncheckedCreateNestedManyWithoutPipelineInputSchema';
import { PipelineKpiUncheckedCreateNestedManyWithoutPipelineInputSchema } from './PipelineKpiUncheckedCreateNestedManyWithoutPipelineInputSchema';
import { PipelineAutomationUncheckedCreateNestedManyWithoutPipelineInputSchema } from './PipelineAutomationUncheckedCreateNestedManyWithoutPipelineInputSchema';
import { PipelineIntegrationUncheckedCreateNestedManyWithoutPipelineInputSchema } from './PipelineIntegrationUncheckedCreateNestedManyWithoutPipelineInputSchema';
import { PipelineAccessRuleUncheckedCreateNestedManyWithoutPipelineInputSchema } from './PipelineAccessRuleUncheckedCreateNestedManyWithoutPipelineInputSchema';

export const PipelineUncheckedCreateWithoutStageDurationsInputSchema: z.ZodType<Prisma.PipelineUncheckedCreateWithoutStageDurationsInput> = z.object({
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
  projectId: z.string(),
  createdBy: z.string().optional().nullable(),
  updatedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  archivedAt: z.coerce.date().optional().nullable(),
  stages: z.lazy(() => PipelineStageUncheckedCreateNestedManyWithoutPipelineInputSchema).optional(),
  deals: z.lazy(() => DealUncheckedCreateNestedManyWithoutPipelineInputSchema).optional(),
  kpis: z.lazy(() => PipelineKpiUncheckedCreateNestedManyWithoutPipelineInputSchema).optional(),
  automations: z.lazy(() => PipelineAutomationUncheckedCreateNestedManyWithoutPipelineInputSchema).optional(),
  integrations: z.lazy(() => PipelineIntegrationUncheckedCreateNestedManyWithoutPipelineInputSchema).optional(),
  accessRules: z.lazy(() => PipelineAccessRuleUncheckedCreateNestedManyWithoutPipelineInputSchema).optional()
}).strict();

export default PipelineUncheckedCreateWithoutStageDurationsInputSchema;
