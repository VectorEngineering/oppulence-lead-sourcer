import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CurrencySchema } from './CurrencySchema';

export const EnumCurrencyFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCurrencyFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CurrencySchema).optional()
}).strict();

export default EnumCurrencyFieldUpdateOperationsInputSchema;
