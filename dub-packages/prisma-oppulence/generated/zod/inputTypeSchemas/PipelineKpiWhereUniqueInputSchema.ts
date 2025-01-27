import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineKpiWhereInputSchema } from './PipelineKpiWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumKpiTypeFilterSchema } from './EnumKpiTypeFilterSchema';
import { KpiTypeSchema } from './KpiTypeSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { EnumPipelineKpiUnitFilterSchema } from './EnumPipelineKpiUnitFilterSchema';
import { PipelineKpiUnitSchema } from './PipelineKpiUnitSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumPipelineKpiFrequencyFilterSchema } from './EnumPipelineKpiFrequencyFilterSchema';
import { PipelineKpiFrequencySchema } from './PipelineKpiFrequencySchema';
import { EnumPipelineKpiCalculationFilterSchema } from './EnumPipelineKpiCalculationFilterSchema';
import { PipelineKpiCalculationSchema } from './PipelineKpiCalculationSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { PipelineRelationFilterSchema } from './PipelineRelationFilterSchema';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';

export const PipelineKpiWhereUniqueInputSchema: z.ZodType<Prisma.PipelineKpiWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => PipelineKpiWhereInputSchema),z.lazy(() => PipelineKpiWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PipelineKpiWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PipelineKpiWhereInputSchema),z.lazy(() => PipelineKpiWhereInputSchema).array() ]).optional(),
  pipelineId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumKpiTypeFilterSchema),z.lazy(() => KpiTypeSchema) ]).optional(),
  target: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  current: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  unit: z.union([ z.lazy(() => EnumPipelineKpiUnitFilterSchema),z.lazy(() => PipelineKpiUnitSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  frequency: z.union([ z.lazy(() => EnumPipelineKpiFrequencyFilterSchema),z.lazy(() => PipelineKpiFrequencySchema) ]).optional(),
  calculation: z.union([ z.lazy(() => EnumPipelineKpiCalculationFilterSchema),z.lazy(() => PipelineKpiCalculationSchema) ]).optional(),
  formula: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pipeline: z.union([ z.lazy(() => PipelineRelationFilterSchema),z.lazy(() => PipelineWhereInputSchema) ]).optional(),
}).strict());

export default PipelineKpiWhereUniqueInputSchema;
