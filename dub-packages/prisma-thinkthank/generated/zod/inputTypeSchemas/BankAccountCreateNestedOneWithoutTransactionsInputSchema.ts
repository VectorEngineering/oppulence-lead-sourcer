import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountCreateWithoutTransactionsInputSchema } from './BankAccountCreateWithoutTransactionsInputSchema';
import { BankAccountUncheckedCreateWithoutTransactionsInputSchema } from './BankAccountUncheckedCreateWithoutTransactionsInputSchema';
import { BankAccountCreateOrConnectWithoutTransactionsInputSchema } from './BankAccountCreateOrConnectWithoutTransactionsInputSchema';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';

export const BankAccountCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.BankAccountCreateNestedOneWithoutTransactionsInput> = z.object({
  create: z.union([ z.lazy(() => BankAccountCreateWithoutTransactionsInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BankAccountCreateOrConnectWithoutTransactionsInputSchema).optional(),
  connect: z.lazy(() => BankAccountWhereUniqueInputSchema).optional()
}).strict();

export default BankAccountCreateNestedOneWithoutTransactionsInputSchema;
