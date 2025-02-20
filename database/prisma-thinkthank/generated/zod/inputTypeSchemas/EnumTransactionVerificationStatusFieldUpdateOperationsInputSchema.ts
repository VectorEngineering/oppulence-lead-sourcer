import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionVerificationStatusSchema } from './TransactionVerificationStatusSchema';

export const EnumTransactionVerificationStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTransactionVerificationStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TransactionVerificationStatusSchema).optional()
}).strict();

export default EnumTransactionVerificationStatusFieldUpdateOperationsInputSchema;
