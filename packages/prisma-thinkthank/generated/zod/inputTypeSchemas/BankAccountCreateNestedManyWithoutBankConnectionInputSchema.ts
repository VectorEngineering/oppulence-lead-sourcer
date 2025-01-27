import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountCreateWithoutBankConnectionInputSchema } from './BankAccountCreateWithoutBankConnectionInputSchema';
import { BankAccountUncheckedCreateWithoutBankConnectionInputSchema } from './BankAccountUncheckedCreateWithoutBankConnectionInputSchema';
import { BankAccountCreateOrConnectWithoutBankConnectionInputSchema } from './BankAccountCreateOrConnectWithoutBankConnectionInputSchema';
import { BankAccountCreateManyBankConnectionInputEnvelopeSchema } from './BankAccountCreateManyBankConnectionInputEnvelopeSchema';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';

export const BankAccountCreateNestedManyWithoutBankConnectionInputSchema: z.ZodType<Prisma.BankAccountCreateNestedManyWithoutBankConnectionInput> = z.object({
  create: z.union([ z.lazy(() => BankAccountCreateWithoutBankConnectionInputSchema),z.lazy(() => BankAccountCreateWithoutBankConnectionInputSchema).array(),z.lazy(() => BankAccountUncheckedCreateWithoutBankConnectionInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutBankConnectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BankAccountCreateOrConnectWithoutBankConnectionInputSchema),z.lazy(() => BankAccountCreateOrConnectWithoutBankConnectionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BankAccountCreateManyBankConnectionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BankAccountCreateNestedManyWithoutBankConnectionInputSchema;
