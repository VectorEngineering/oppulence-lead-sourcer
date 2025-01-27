import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealActivityTypeSchema } from './DealActivityTypeSchema';

export const EnumDealActivityTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDealActivityTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => DealActivityTypeSchema).optional()
}).strict();

export default EnumDealActivityTypeFieldUpdateOperationsInputSchema;
