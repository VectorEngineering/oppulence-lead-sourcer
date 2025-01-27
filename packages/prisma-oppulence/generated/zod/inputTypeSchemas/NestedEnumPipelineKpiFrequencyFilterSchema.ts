import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineKpiFrequencySchema } from './PipelineKpiFrequencySchema';

export const NestedEnumPipelineKpiFrequencyFilterSchema: z.ZodType<Prisma.NestedEnumPipelineKpiFrequencyFilter> = z.object({
  equals: z.lazy(() => PipelineKpiFrequencySchema).optional(),
  in: z.lazy(() => PipelineKpiFrequencySchema).array().optional(),
  notIn: z.lazy(() => PipelineKpiFrequencySchema).array().optional(),
  not: z.union([ z.lazy(() => PipelineKpiFrequencySchema),z.lazy(() => NestedEnumPipelineKpiFrequencyFilterSchema) ]).optional(),
}).strict();

export default NestedEnumPipelineKpiFrequencyFilterSchema;
