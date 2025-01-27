import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineKpiUnitSchema } from './PipelineKpiUnitSchema';

export const EnumPipelineKpiUnitFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPipelineKpiUnitFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PipelineKpiUnitSchema).optional()
}).strict();

export default EnumPipelineKpiUnitFieldUpdateOperationsInputSchema;
