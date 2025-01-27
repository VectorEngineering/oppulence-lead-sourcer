import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsCreateWithoutBankConnectionInputSchema } from './BankConnectionSettingsCreateWithoutBankConnectionInputSchema';
import { BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema';
import { BankConnectionSettingsCreateOrConnectWithoutBankConnectionInputSchema } from './BankConnectionSettingsCreateOrConnectWithoutBankConnectionInputSchema';
import { BankConnectionSettingsUpsertWithoutBankConnectionInputSchema } from './BankConnectionSettingsUpsertWithoutBankConnectionInputSchema';
import { BankConnectionSettingsWhereInputSchema } from './BankConnectionSettingsWhereInputSchema';
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema';
import { BankConnectionSettingsUpdateToOneWithWhereWithoutBankConnectionInputSchema } from './BankConnectionSettingsUpdateToOneWithWhereWithoutBankConnectionInputSchema';
import { BankConnectionSettingsUpdateWithoutBankConnectionInputSchema } from './BankConnectionSettingsUpdateWithoutBankConnectionInputSchema';
import { BankConnectionSettingsUncheckedUpdateWithoutBankConnectionInputSchema } from './BankConnectionSettingsUncheckedUpdateWithoutBankConnectionInputSchema';

export const BankConnectionSettingsUncheckedUpdateOneWithoutBankConnectionNestedInputSchema: z.ZodType<Prisma.BankConnectionSettingsUncheckedUpdateOneWithoutBankConnectionNestedInput> = z.object({
  create: z.union([ z.lazy(() => BankConnectionSettingsCreateWithoutBankConnectionInputSchema),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BankConnectionSettingsCreateOrConnectWithoutBankConnectionInputSchema).optional(),
  upsert: z.lazy(() => BankConnectionSettingsUpsertWithoutBankConnectionInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BankConnectionSettingsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BankConnectionSettingsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BankConnectionSettingsUpdateToOneWithWhereWithoutBankConnectionInputSchema),z.lazy(() => BankConnectionSettingsUpdateWithoutBankConnectionInputSchema),z.lazy(() => BankConnectionSettingsUncheckedUpdateWithoutBankConnectionInputSchema) ]).optional(),
}).strict();

export default BankConnectionSettingsUncheckedUpdateOneWithoutBankConnectionNestedInputSchema;
