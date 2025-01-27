import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineTypeSchema } from './PipelineTypeSchema';
import { NestedEnumPipelineTypeWithAggregatesFilterSchema } from './NestedEnumPipelineTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumPipelineTypeFilterSchema } from './NestedEnumPipelineTypeFilterSchema';

export const EnumPipelineTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPipelineTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PipelineTypeSchema).optional(),
  in: z.lazy(() => PipelineTypeSchema).array().optional(),
  notIn: z.lazy(() => PipelineTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PipelineTypeSchema),z.lazy(() => NestedEnumPipelineTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPipelineTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPipelineTypeFilterSchema).optional()
}).strict();

export default EnumPipelineTypeWithAggregatesFilterSchema;
