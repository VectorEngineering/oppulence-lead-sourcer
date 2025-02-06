import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionCreateWithoutBankAccountInputSchema } from './TransactionCreateWithoutBankAccountInputSchema';
import { TransactionUncheckedCreateWithoutBankAccountInputSchema } from './TransactionUncheckedCreateWithoutBankAccountInputSchema';

export const TransactionCreateOrConnectWithoutBankAccountInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutBankAccountInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCreateWithoutBankAccountInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutBankAccountInputSchema) ]),
}).strict();

export default TransactionCreateOrConnectWithoutBankAccountInputSchema;
