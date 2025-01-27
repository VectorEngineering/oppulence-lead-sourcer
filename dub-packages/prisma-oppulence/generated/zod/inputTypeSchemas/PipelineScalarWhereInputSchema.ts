import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumPipelineTypeFilterSchema } from './EnumPipelineTypeFilterSchema';
import { PipelineTypeSchema } from './PipelineTypeSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const PipelineScalarWhereInputSchema: z.ZodType<Prisma.PipelineScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PipelineScalarWhereInputSchema),z.lazy(() => PipelineScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PipelineScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PipelineScalarWhereInputSchema),z.lazy(() => PipelineScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumPipelineTypeFilterSchema),z.lazy(() => PipelineTypeSchema) ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isDefault: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  defaultStageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pipelineFocus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pipelineSegment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pipelineCategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pipelineGoal: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  typicalSalesCycle: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  averageDealSize: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  averageCloseRate: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  minimumDealSize: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  maximumDealSize: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  targetMarket: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  salesMethodology: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  qualificationCriteria: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  forecastingMethod: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  confidenceScore: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  revenueTarget: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  dealCountTarget: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  complianceLevel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  securityTier: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dataRetention: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  visibilityLevel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  archivedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default PipelineScalarWhereInputSchema;
