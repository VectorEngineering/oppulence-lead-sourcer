import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsCreateWithoutBankConnectionInputSchema } from './BankConnectionSettingsCreateWithoutBankConnectionInputSchema';
import { BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema';
import { BankConnectionSettingsCreateOrConnectWithoutBankConnectionInputSchema } from './BankConnectionSettingsCreateOrConnectWithoutBankConnectionInputSchema';
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema';

export const BankConnectionSettingsUncheckedCreateNestedOneWithoutBankConnectionInputSchema: z.ZodType<Prisma.BankConnectionSettingsUncheckedCreateNestedOneWithoutBankConnectionInput> = z.object({
  create: z.union([ z.lazy(() => BankConnectionSettingsCreateWithoutBankConnectionInputSchema),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BankConnectionSettingsCreateOrConnectWithoutBankConnectionInputSchema).optional(),
  connect: z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).optional()
}).strict();

export default BankConnectionSettingsUncheckedCreateNestedOneWithoutBankConnectionInputSchema;
