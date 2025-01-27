import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealTaskStatusSchema } from './DealTaskStatusSchema';

export const EnumDealTaskStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDealTaskStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => DealTaskStatusSchema).optional()
}).strict();

export default EnumDealTaskStatusFieldUpdateOperationsInputSchema;
