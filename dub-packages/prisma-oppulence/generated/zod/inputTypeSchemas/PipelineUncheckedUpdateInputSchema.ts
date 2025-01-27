import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PipelineTypeSchema } from './PipelineTypeSchema';
import { EnumPipelineTypeFieldUpdateOperationsInputSchema } from './EnumPipelineTypeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { PipelineStageUncheckedUpdateManyWithoutPipelineNestedInputSchema } from './PipelineStageUncheckedUpdateManyWithoutPipelineNestedInputSchema';
import { DealUncheckedUpdateManyWithoutPipelineNestedInputSchema } from './DealUncheckedUpdateManyWithoutPipelineNestedInputSchema';
import { PipelineKpiUncheckedUpdateManyWithoutPipelineNestedInputSchema } from './PipelineKpiUncheckedUpdateManyWithoutPipelineNestedInputSchema';
import { PipelineAutomationUncheckedUpdateManyWithoutPipelineNestedInputSchema } from './PipelineAutomationUncheckedUpdateManyWithoutPipelineNestedInputSchema';
import { StageDurationUncheckedUpdateManyWithoutPipelineNestedInputSchema } from './StageDurationUncheckedUpdateManyWithoutPipelineNestedInputSchema';
import { PipelineIntegrationUncheckedUpdateManyWithoutPipelineNestedInputSchema } from './PipelineIntegrationUncheckedUpdateManyWithoutPipelineNestedInputSchema';
import { PipelineAccessRuleUncheckedUpdateManyWithoutPipelineNestedInputSchema } from './PipelineAccessRuleUncheckedUpdateManyWithoutPipelineNestedInputSchema';

export const PipelineUncheckedUpdateInputSchema: z.ZodType<Prisma.PipelineUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PipelineTypeSchema),z.lazy(() => EnumPipelineTypeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isDefault: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  defaultStageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pipelineFocus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pipelineSegment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pipelineCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pipelineGoal: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  typicalSalesCycle: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averageDealSize: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averageCloseRate: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minimumDealSize: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maximumDealSize: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  targetMarket: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salesMethodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualificationCriteria: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  forecastingMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confidenceScore: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  revenueTarget: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dealCountTarget: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  complianceLevel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityTier: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dataRetention: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  visibilityLevel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  archivedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stages: z.lazy(() => PipelineStageUncheckedUpdateManyWithoutPipelineNestedInputSchema).optional(),
  deals: z.lazy(() => DealUncheckedUpdateManyWithoutPipelineNestedInputSchema).optional(),
  kpis: z.lazy(() => PipelineKpiUncheckedUpdateManyWithoutPipelineNestedInputSchema).optional(),
  automations: z.lazy(() => PipelineAutomationUncheckedUpdateManyWithoutPipelineNestedInputSchema).optional(),
  stageDurations: z.lazy(() => StageDurationUncheckedUpdateManyWithoutPipelineNestedInputSchema).optional(),
  integrations: z.lazy(() => PipelineIntegrationUncheckedUpdateManyWithoutPipelineNestedInputSchema).optional(),
  accessRules: z.lazy(() => PipelineAccessRuleUncheckedUpdateManyWithoutPipelineNestedInputSchema).optional()
}).strict();

export default PipelineUncheckedUpdateInputSchema;
