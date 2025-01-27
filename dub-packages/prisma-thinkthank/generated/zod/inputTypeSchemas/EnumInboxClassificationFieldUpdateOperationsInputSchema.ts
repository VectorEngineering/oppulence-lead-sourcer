import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxClassificationSchema } from './InboxClassificationSchema';

export const EnumInboxClassificationFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumInboxClassificationFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => InboxClassificationSchema).optional()
}).strict();

export default EnumInboxClassificationFieldUpdateOperationsInputSchema;
