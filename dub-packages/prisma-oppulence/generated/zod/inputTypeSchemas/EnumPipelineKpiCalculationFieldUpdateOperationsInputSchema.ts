import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineKpiCalculationSchema } from './PipelineKpiCalculationSchema';

export const EnumPipelineKpiCalculationFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPipelineKpiCalculationFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PipelineKpiCalculationSchema).optional()
}).strict();

export default EnumPipelineKpiCalculationFieldUpdateOperationsInputSchema;
