import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxStatusSchema } from './InboxStatusSchema';

export const NullableEnumInboxStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumInboxStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => InboxStatusSchema).optional().nullable()
}).strict();

export default NullableEnumInboxStatusFieldUpdateOperationsInputSchema;
