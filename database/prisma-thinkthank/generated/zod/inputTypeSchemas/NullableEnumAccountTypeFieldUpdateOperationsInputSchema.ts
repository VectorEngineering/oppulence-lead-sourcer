import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountTypeSchema } from './AccountTypeSchema';

export const NullableEnumAccountTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumAccountTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AccountTypeSchema).optional().nullable()
}).strict();

export default NullableEnumAccountTypeFieldUpdateOperationsInputSchema;
