import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FeedbackTypeSchema } from './FeedbackTypeSchema';

export const EnumFeedbackTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFeedbackTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => FeedbackTypeSchema).optional()
}).strict();

export default EnumFeedbackTypeFieldUpdateOperationsInputSchema;
