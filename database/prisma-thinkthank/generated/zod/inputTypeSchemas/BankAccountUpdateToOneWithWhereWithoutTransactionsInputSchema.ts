import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountWhereInputSchema } from './BankAccountWhereInputSchema';
import { BankAccountUpdateWithoutTransactionsInputSchema } from './BankAccountUpdateWithoutTransactionsInputSchema';
import { BankAccountUncheckedUpdateWithoutTransactionsInputSchema } from './BankAccountUncheckedUpdateWithoutTransactionsInputSchema';

export const BankAccountUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.BankAccountUpdateToOneWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => BankAccountWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BankAccountUpdateWithoutTransactionsInputSchema),z.lazy(() => BankAccountUncheckedUpdateWithoutTransactionsInputSchema) ]),
}).strict();

export default BankAccountUpdateToOneWithWhereWithoutTransactionsInputSchema;
