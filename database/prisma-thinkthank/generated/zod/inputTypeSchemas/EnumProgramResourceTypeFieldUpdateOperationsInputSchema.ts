import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramResourceTypeSchema } from './ProgramResourceTypeSchema';

export const EnumProgramResourceTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumProgramResourceTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ProgramResourceTypeSchema).optional()
}).strict();

export default EnumProgramResourceTypeFieldUpdateOperationsInputSchema;
