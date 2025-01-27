import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountCreateWithoutTransactionsInputSchema } from './BankAccountCreateWithoutTransactionsInputSchema';
import { BankAccountUncheckedCreateWithoutTransactionsInputSchema } from './BankAccountUncheckedCreateWithoutTransactionsInputSchema';

export const BankAccountCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.BankAccountCreateOrConnectWithoutTransactionsInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BankAccountCreateWithoutTransactionsInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutTransactionsInputSchema) ]),
}).strict();

export default BankAccountCreateOrConnectWithoutTransactionsInputSchema;
