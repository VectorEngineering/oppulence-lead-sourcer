import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStagePipelineIdOrderCompoundUniqueInputSchema } from './PipelineStagePipelineIdOrderCompoundUniqueInputSchema';
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { PipelineRelationFilterSchema } from './PipelineRelationFilterSchema';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';
import { DealListRelationFilterSchema } from './DealListRelationFilterSchema';
import { StageRequiredFieldListRelationFilterSchema } from './StageRequiredFieldListRelationFilterSchema';
import { StageDurationNullableRelationFilterSchema } from './StageDurationNullableRelationFilterSchema';
import { StageDurationWhereInputSchema } from './StageDurationWhereInputSchema';

export const PipelineStageWhereUniqueInputSchema: z.ZodType<Prisma.PipelineStageWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    pipelineId_order: z.lazy(() => PipelineStagePipelineIdOrderCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    pipelineId_order: z.lazy(() => PipelineStagePipelineIdOrderCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  pipelineId_order: z.lazy(() => PipelineStagePipelineIdOrderCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PipelineStageWhereInputSchema),z.lazy(() => PipelineStageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PipelineStageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PipelineStageWhereInputSchema),z.lazy(() => PipelineStageWhereInputSchema).array() ]).optional(),
  pipelineId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  probability: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isDefault: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isFinal: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isWon: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isLost: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  autoMoveAfterDays: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  nextStageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pipeline: z.union([ z.lazy(() => PipelineRelationFilterSchema),z.lazy(() => PipelineWhereInputSchema) ]).optional(),
  deals: z.lazy(() => DealListRelationFilterSchema).optional(),
  requiredFields: z.lazy(() => StageRequiredFieldListRelationFilterSchema).optional(),
  stageDuration: z.union([ z.lazy(() => StageDurationNullableRelationFilterSchema),z.lazy(() => StageDurationWhereInputSchema) ]).optional().nullable(),
}).strict());

export default PipelineStageWhereUniqueInputSchema;
