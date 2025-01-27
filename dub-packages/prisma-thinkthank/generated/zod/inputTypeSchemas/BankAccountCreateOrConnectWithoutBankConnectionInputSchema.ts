import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountCreateWithoutBankConnectionInputSchema } from './BankAccountCreateWithoutBankConnectionInputSchema';
import { BankAccountUncheckedCreateWithoutBankConnectionInputSchema } from './BankAccountUncheckedCreateWithoutBankConnectionInputSchema';

export const BankAccountCreateOrConnectWithoutBankConnectionInputSchema: z.ZodType<Prisma.BankAccountCreateOrConnectWithoutBankConnectionInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BankAccountCreateWithoutBankConnectionInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutBankConnectionInputSchema) ]),
}).strict();

export default BankAccountCreateOrConnectWithoutBankConnectionInputSchema;
