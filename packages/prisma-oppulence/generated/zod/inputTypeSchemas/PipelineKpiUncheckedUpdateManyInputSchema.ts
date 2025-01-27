import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { KpiTypeSchema } from './KpiTypeSchema';
import { EnumKpiTypeFieldUpdateOperationsInputSchema } from './EnumKpiTypeFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { PipelineKpiUnitSchema } from './PipelineKpiUnitSchema';
import { EnumPipelineKpiUnitFieldUpdateOperationsInputSchema } from './EnumPipelineKpiUnitFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PipelineKpiFrequencySchema } from './PipelineKpiFrequencySchema';
import { EnumPipelineKpiFrequencyFieldUpdateOperationsInputSchema } from './EnumPipelineKpiFrequencyFieldUpdateOperationsInputSchema';
import { PipelineKpiCalculationSchema } from './PipelineKpiCalculationSchema';
import { EnumPipelineKpiCalculationFieldUpdateOperationsInputSchema } from './EnumPipelineKpiCalculationFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const PipelineKpiUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PipelineKpiUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pipelineId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => KpiTypeSchema),z.lazy(() => EnumKpiTypeFieldUpdateOperationsInputSchema) ]).optional(),
  target: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  current: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unit: z.union([ z.lazy(() => PipelineKpiUnitSchema),z.lazy(() => EnumPipelineKpiUnitFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  frequency: z.union([ z.lazy(() => PipelineKpiFrequencySchema),z.lazy(() => EnumPipelineKpiFrequencyFieldUpdateOperationsInputSchema) ]).optional(),
  calculation: z.union([ z.lazy(() => PipelineKpiCalculationSchema),z.lazy(() => EnumPipelineKpiCalculationFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PipelineKpiUncheckedUpdateManyInputSchema;
