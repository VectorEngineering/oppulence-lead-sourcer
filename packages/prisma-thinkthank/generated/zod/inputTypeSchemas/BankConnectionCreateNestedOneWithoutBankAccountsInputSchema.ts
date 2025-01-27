import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionCreateWithoutBankAccountsInputSchema } from './BankConnectionCreateWithoutBankAccountsInputSchema';
import { BankConnectionUncheckedCreateWithoutBankAccountsInputSchema } from './BankConnectionUncheckedCreateWithoutBankAccountsInputSchema';
import { BankConnectionCreateOrConnectWithoutBankAccountsInputSchema } from './BankConnectionCreateOrConnectWithoutBankAccountsInputSchema';
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema';

export const BankConnectionCreateNestedOneWithoutBankAccountsInputSchema: z.ZodType<Prisma.BankConnectionCreateNestedOneWithoutBankAccountsInput> = z.object({
  create: z.union([ z.lazy(() => BankConnectionCreateWithoutBankAccountsInputSchema),z.lazy(() => BankConnectionUncheckedCreateWithoutBankAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BankConnectionCreateOrConnectWithoutBankAccountsInputSchema).optional(),
  connect: z.lazy(() => BankConnectionWhereUniqueInputSchema).optional()
}).strict();

export default BankConnectionCreateNestedOneWithoutBankAccountsInputSchema;
