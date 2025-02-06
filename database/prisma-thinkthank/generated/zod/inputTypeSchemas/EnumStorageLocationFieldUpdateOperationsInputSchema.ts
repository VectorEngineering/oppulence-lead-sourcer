import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StorageLocationSchema } from './StorageLocationSchema';

export const EnumStorageLocationFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumStorageLocationFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => StorageLocationSchema).optional()
}).strict();

export default EnumStorageLocationFieldUpdateOperationsInputSchema;
