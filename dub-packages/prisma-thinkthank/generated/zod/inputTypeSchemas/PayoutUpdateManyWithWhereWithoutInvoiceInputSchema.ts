import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutScalarWhereInputSchema } from './PayoutScalarWhereInputSchema';
import { PayoutUpdateManyMutationInputSchema } from './PayoutUpdateManyMutationInputSchema';
import { PayoutUncheckedUpdateManyWithoutInvoiceInputSchema } from './PayoutUncheckedUpdateManyWithoutInvoiceInputSchema';

export const PayoutUpdateManyWithWhereWithoutInvoiceInputSchema: z.ZodType<Prisma.PayoutUpdateManyWithWhereWithoutInvoiceInput> = z.object({
  where: z.lazy(() => PayoutScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PayoutUpdateManyMutationInputSchema),z.lazy(() => PayoutUncheckedUpdateManyWithoutInvoiceInputSchema) ]),
}).strict();

export default PayoutUpdateManyWithWhereWithoutInvoiceInputSchema;
