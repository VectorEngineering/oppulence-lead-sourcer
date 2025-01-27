import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConnectionStatusSchema } from './ConnectionStatusSchema';

export const NullableEnumConnectionStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumConnectionStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ConnectionStatusSchema).optional().nullable()
}).strict();

export default NullableEnumConnectionStatusFieldUpdateOperationsInputSchema;
