import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionRiskLevelSchema } from './TransactionRiskLevelSchema';

export const EnumTransactionRiskLevelFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTransactionRiskLevelFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TransactionRiskLevelSchema).optional()
}).strict();

export default EnumTransactionRiskLevelFieldUpdateOperationsInputSchema;
