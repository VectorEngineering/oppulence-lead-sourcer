import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionFrequencySchema } from './TransactionFrequencySchema';

export const NullableEnumTransactionFrequencyFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumTransactionFrequencyFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TransactionFrequencySchema).optional().nullable()
}).strict();

export default NullableEnumTransactionFrequencyFieldUpdateOperationsInputSchema;
