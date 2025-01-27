import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConnectionStatusSchema } from './ConnectionStatusSchema';

export const EnumConnectionStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumConnectionStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ConnectionStatusSchema).optional()
}).strict();

export default EnumConnectionStatusFieldUpdateOperationsInputSchema;
