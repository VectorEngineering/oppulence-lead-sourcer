import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineKpiFrequencySchema } from './PipelineKpiFrequencySchema';

export const EnumPipelineKpiFrequencyFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPipelineKpiFrequencyFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PipelineKpiFrequencySchema).optional()
}).strict();

export default EnumPipelineKpiFrequencyFieldUpdateOperationsInputSchema;
