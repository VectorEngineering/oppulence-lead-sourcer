import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankProviderSchema } from './BankProviderSchema';

export const NullableEnumBankProviderFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumBankProviderFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BankProviderSchema).optional().nullable()
}).strict();

export default NullableEnumBankProviderFieldUpdateOperationsInputSchema;
