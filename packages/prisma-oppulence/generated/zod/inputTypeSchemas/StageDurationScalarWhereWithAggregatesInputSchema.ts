import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const StageDurationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StageDurationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StageDurationScalarWhereWithAggregatesInputSchema),z.lazy(() => StageDurationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StageDurationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StageDurationScalarWhereWithAggregatesInputSchema),z.lazy(() => StageDurationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pipelineId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  stageId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expectedDays: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  warningDays: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  criticalDays: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default StageDurationScalarWhereWithAggregatesInputSchema;
