import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { PipelineRelationFilterSchema } from './PipelineRelationFilterSchema';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';
import { PipelineStageRelationFilterSchema } from './PipelineStageRelationFilterSchema';
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema';

export const StageDurationWhereInputSchema: z.ZodType<Prisma.StageDurationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StageDurationWhereInputSchema),z.lazy(() => StageDurationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StageDurationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StageDurationWhereInputSchema),z.lazy(() => StageDurationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pipelineId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expectedDays: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  warningDays: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  criticalDays: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  pipeline: z.union([ z.lazy(() => PipelineRelationFilterSchema),z.lazy(() => PipelineWhereInputSchema) ]).optional(),
  stage: z.union([ z.lazy(() => PipelineStageRelationFilterSchema),z.lazy(() => PipelineStageWhereInputSchema) ]).optional(),
}).strict();

export default StageDurationWhereInputSchema;
