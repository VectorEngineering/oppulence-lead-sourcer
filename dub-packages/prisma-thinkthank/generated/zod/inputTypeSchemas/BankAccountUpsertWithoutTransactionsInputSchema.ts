import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountUpdateWithoutTransactionsInputSchema } from './BankAccountUpdateWithoutTransactionsInputSchema';
import { BankAccountUncheckedUpdateWithoutTransactionsInputSchema } from './BankAccountUncheckedUpdateWithoutTransactionsInputSchema';
import { BankAccountCreateWithoutTransactionsInputSchema } from './BankAccountCreateWithoutTransactionsInputSchema';
import { BankAccountUncheckedCreateWithoutTransactionsInputSchema } from './BankAccountUncheckedCreateWithoutTransactionsInputSchema';
import { BankAccountWhereInputSchema } from './BankAccountWhereInputSchema';

export const BankAccountUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.BankAccountUpsertWithoutTransactionsInput> = z.object({
  update: z.union([ z.lazy(() => BankAccountUpdateWithoutTransactionsInputSchema),z.lazy(() => BankAccountUncheckedUpdateWithoutTransactionsInputSchema) ]),
  create: z.union([ z.lazy(() => BankAccountCreateWithoutTransactionsInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutTransactionsInputSchema) ]),
  where: z.lazy(() => BankAccountWhereInputSchema).optional()
}).strict();

export default BankAccountUpsertWithoutTransactionsInputSchema;
