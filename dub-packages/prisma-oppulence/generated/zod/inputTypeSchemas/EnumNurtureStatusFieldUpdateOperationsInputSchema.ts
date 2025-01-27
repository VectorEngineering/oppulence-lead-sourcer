import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NurtureStatusSchema } from './NurtureStatusSchema';

export const EnumNurtureStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumNurtureStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => NurtureStatusSchema).optional()
}).strict();

export default EnumNurtureStatusFieldUpdateOperationsInputSchema;
