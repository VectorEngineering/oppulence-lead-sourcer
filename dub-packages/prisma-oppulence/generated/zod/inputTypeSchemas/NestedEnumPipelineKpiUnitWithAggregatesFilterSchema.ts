import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineKpiUnitSchema } from './PipelineKpiUnitSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumPipelineKpiUnitFilterSchema } from './NestedEnumPipelineKpiUnitFilterSchema';

export const NestedEnumPipelineKpiUnitWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPipelineKpiUnitWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PipelineKpiUnitSchema).optional(),
  in: z.lazy(() => PipelineKpiUnitSchema).array().optional(),
  notIn: z.lazy(() => PipelineKpiUnitSchema).array().optional(),
  not: z.union([ z.lazy(() => PipelineKpiUnitSchema),z.lazy(() => NestedEnumPipelineKpiUnitWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPipelineKpiUnitFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPipelineKpiUnitFilterSchema).optional()
}).strict();

export default NestedEnumPipelineKpiUnitWithAggregatesFilterSchema;
