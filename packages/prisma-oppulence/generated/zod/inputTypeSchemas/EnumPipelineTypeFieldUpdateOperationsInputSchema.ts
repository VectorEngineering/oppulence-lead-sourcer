import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineTypeSchema } from './PipelineTypeSchema';

export const EnumPipelineTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPipelineTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PipelineTypeSchema).optional()
}).strict();

export default EnumPipelineTypeFieldUpdateOperationsInputSchema;
