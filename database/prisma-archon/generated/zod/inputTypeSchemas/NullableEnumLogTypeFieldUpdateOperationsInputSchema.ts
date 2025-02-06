import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LogTypeSchema } from './LogTypeSchema';

export const NullableEnumLogTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumLogTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LogTypeSchema).optional().nullable()
}).strict();

export default NullableEnumLogTypeFieldUpdateOperationsInputSchema;
