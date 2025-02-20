import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CurrencySchema } from './CurrencySchema';
import { NestedEnumCurrencyFilterSchema } from './NestedEnumCurrencyFilterSchema';

export const EnumCurrencyFilterSchema: z.ZodType<Prisma.EnumCurrencyFilter> = z.object({
  equals: z.lazy(() => CurrencySchema).optional(),
  in: z.lazy(() => CurrencySchema).array().optional(),
  notIn: z.lazy(() => CurrencySchema).array().optional(),
  not: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => NestedEnumCurrencyFilterSchema) ]).optional(),
}).strict();

export default EnumCurrencyFilterSchema;
