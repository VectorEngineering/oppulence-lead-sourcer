import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutStatusSchema } from './PayoutStatusSchema';

export const EnumPayoutStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPayoutStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PayoutStatusSchema).optional()
}).strict();

export default EnumPayoutStatusFieldUpdateOperationsInputSchema;
