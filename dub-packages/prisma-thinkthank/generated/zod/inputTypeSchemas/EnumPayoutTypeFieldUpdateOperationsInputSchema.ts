import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutTypeSchema } from './PayoutTypeSchema';

export const EnumPayoutTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPayoutTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PayoutTypeSchema).optional()
}).strict();

export default EnumPayoutTypeFieldUpdateOperationsInputSchema;
