import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineKpiCalculationSchema } from './PipelineKpiCalculationSchema';
import { NestedEnumPipelineKpiCalculationWithAggregatesFilterSchema } from './NestedEnumPipelineKpiCalculationWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumPipelineKpiCalculationFilterSchema } from './NestedEnumPipelineKpiCalculationFilterSchema';

export const EnumPipelineKpiCalculationWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPipelineKpiCalculationWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PipelineKpiCalculationSchema).optional(),
  in: z.lazy(() => PipelineKpiCalculationSchema).array().optional(),
  notIn: z.lazy(() => PipelineKpiCalculationSchema).array().optional(),
  not: z.union([ z.lazy(() => PipelineKpiCalculationSchema),z.lazy(() => NestedEnumPipelineKpiCalculationWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPipelineKpiCalculationFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPipelineKpiCalculationFilterSchema).optional()
}).strict();

export default EnumPipelineKpiCalculationWithAggregatesFilterSchema;
