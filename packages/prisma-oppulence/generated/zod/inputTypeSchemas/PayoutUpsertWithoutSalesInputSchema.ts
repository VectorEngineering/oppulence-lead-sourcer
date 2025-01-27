import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutUpdateWithoutSalesInputSchema } from './PayoutUpdateWithoutSalesInputSchema';
import { PayoutUncheckedUpdateWithoutSalesInputSchema } from './PayoutUncheckedUpdateWithoutSalesInputSchema';
import { PayoutCreateWithoutSalesInputSchema } from './PayoutCreateWithoutSalesInputSchema';
import { PayoutUncheckedCreateWithoutSalesInputSchema } from './PayoutUncheckedCreateWithoutSalesInputSchema';
import { PayoutWhereInputSchema } from './PayoutWhereInputSchema';

export const PayoutUpsertWithoutSalesInputSchema: z.ZodType<Prisma.PayoutUpsertWithoutSalesInput> = z.object({
  update: z.union([ z.lazy(() => PayoutUpdateWithoutSalesInputSchema),z.lazy(() => PayoutUncheckedUpdateWithoutSalesInputSchema) ]),
  create: z.union([ z.lazy(() => PayoutCreateWithoutSalesInputSchema),z.lazy(() => PayoutUncheckedCreateWithoutSalesInputSchema) ]),
  where: z.lazy(() => PayoutWhereInputSchema).optional()
}).strict();

export default PayoutUpsertWithoutSalesInputSchema;
