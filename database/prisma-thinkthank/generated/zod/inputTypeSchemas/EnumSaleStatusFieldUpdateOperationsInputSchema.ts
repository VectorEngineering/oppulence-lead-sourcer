import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleStatusSchema } from './SaleStatusSchema';

export const EnumSaleStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSaleStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SaleStatusSchema).optional()
}).strict();

export default EnumSaleStatusFieldUpdateOperationsInputSchema;
