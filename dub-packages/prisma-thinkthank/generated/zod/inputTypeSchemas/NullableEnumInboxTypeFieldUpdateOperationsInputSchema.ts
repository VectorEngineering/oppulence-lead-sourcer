import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxTypeSchema } from './InboxTypeSchema';

export const NullableEnumInboxTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumInboxTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => InboxTypeSchema).optional().nullable()
}).strict();

export default NullableEnumInboxTypeFieldUpdateOperationsInputSchema;
