import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const StageDurationScalarWhereInputSchema: z.ZodType<Prisma.StageDurationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StageDurationScalarWhereInputSchema),z.lazy(() => StageDurationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StageDurationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StageDurationScalarWhereInputSchema),z.lazy(() => StageDurationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pipelineId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expectedDays: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  warningDays: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  criticalDays: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default StageDurationScalarWhereInputSchema;
