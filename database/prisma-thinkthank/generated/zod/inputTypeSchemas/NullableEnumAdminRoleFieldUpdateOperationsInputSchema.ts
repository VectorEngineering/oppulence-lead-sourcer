import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AdminRoleSchema } from './AdminRoleSchema';

export const NullableEnumAdminRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumAdminRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AdminRoleSchema).optional().nullable()
}).strict();

export default NullableEnumAdminRoleFieldUpdateOperationsInputSchema;
