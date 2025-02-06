import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionUpdateWithoutBankAccountInputSchema } from './TransactionUpdateWithoutBankAccountInputSchema';
import { TransactionUncheckedUpdateWithoutBankAccountInputSchema } from './TransactionUncheckedUpdateWithoutBankAccountInputSchema';
import { TransactionCreateWithoutBankAccountInputSchema } from './TransactionCreateWithoutBankAccountInputSchema';
import { TransactionUncheckedCreateWithoutBankAccountInputSchema } from './TransactionUncheckedCreateWithoutBankAccountInputSchema';

export const TransactionUpsertWithWhereUniqueWithoutBankAccountInputSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutBankAccountInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionUpdateWithoutBankAccountInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutBankAccountInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionCreateWithoutBankAccountInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutBankAccountInputSchema) ]),
}).strict();

export default TransactionUpsertWithWhereUniqueWithoutBankAccountInputSchema;
