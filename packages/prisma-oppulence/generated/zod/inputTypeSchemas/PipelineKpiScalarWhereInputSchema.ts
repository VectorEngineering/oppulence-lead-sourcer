import type { Prisma } from '@prisma/client';

import { z } from 'zod';
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

export const PipelineKpiScalarWhereInputSchema: z.ZodType<Prisma.PipelineKpiScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PipelineKpiScalarWhereInputSchema),z.lazy(() => PipelineKpiScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PipelineKpiScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PipelineKpiScalarWhereInputSchema),z.lazy(() => PipelineKpiScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
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
}).strict();

export default PipelineKpiScalarWhereInputSchema;
