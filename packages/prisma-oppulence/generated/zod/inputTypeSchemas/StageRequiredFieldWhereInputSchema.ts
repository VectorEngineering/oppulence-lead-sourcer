import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PipelineStageRelationFilterSchema } from './PipelineStageRelationFilterSchema';
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema';

export const StageRequiredFieldWhereInputSchema: z.ZodType<Prisma.StageRequiredFieldWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StageRequiredFieldWhereInputSchema),z.lazy(() => StageRequiredFieldWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StageRequiredFieldWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StageRequiredFieldWhereInputSchema),z.lazy(() => StageRequiredFieldWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fieldName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  stage: z.union([ z.lazy(() => PipelineStageRelationFilterSchema),z.lazy(() => PipelineStageWhereInputSchema) ]).optional(),
}).strict();

export default StageRequiredFieldWhereInputSchema;
