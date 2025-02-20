import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountOwnershipTypeSchema } from './AccountOwnershipTypeSchema';

export const NullableEnumAccountOwnershipTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumAccountOwnershipTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AccountOwnershipTypeSchema).optional().nullable()
}).strict();

export default NullableEnumAccountOwnershipTypeFieldUpdateOperationsInputSchema;
