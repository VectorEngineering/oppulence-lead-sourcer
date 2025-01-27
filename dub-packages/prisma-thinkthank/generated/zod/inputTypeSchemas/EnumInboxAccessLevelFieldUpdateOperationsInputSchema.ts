import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxAccessLevelSchema } from './InboxAccessLevelSchema';

export const EnumInboxAccessLevelFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumInboxAccessLevelFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => InboxAccessLevelSchema).optional()
}).strict();

export default EnumInboxAccessLevelFieldUpdateOperationsInputSchema;
