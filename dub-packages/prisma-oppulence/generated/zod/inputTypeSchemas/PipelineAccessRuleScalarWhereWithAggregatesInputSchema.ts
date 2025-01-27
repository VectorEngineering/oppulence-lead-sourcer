import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumAccessLevelWithAggregatesFilterSchema } from './EnumAccessLevelWithAggregatesFilterSchema';
import { AccessLevelSchema } from './AccessLevelSchema';

export const PipelineAccessRuleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PipelineAccessRuleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PipelineAccessRuleScalarWhereWithAggregatesInputSchema),z.lazy(() => PipelineAccessRuleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PipelineAccessRuleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PipelineAccessRuleScalarWhereWithAggregatesInputSchema),z.lazy(() => PipelineAccessRuleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pipelineId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  teamId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  accessLevel: z.union([ z.lazy(() => EnumAccessLevelWithAggregatesFilterSchema),z.lazy(() => AccessLevelSchema) ]).optional(),
}).strict();

export default PipelineAccessRuleScalarWhereWithAggregatesInputSchema;
