import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsCreateWithoutWebhooksInputSchema } from './BankConnectionSettingsCreateWithoutWebhooksInputSchema';
import { BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema';
import { BankConnectionSettingsCreateOrConnectWithoutWebhooksInputSchema } from './BankConnectionSettingsCreateOrConnectWithoutWebhooksInputSchema';
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema';

export const BankConnectionSettingsUncheckedCreateNestedManyWithoutWebhooksInputSchema: z.ZodType<Prisma.BankConnectionSettingsUncheckedCreateNestedManyWithoutWebhooksInput> = z.object({
  create: z.union([ z.lazy(() => BankConnectionSettingsCreateWithoutWebhooksInputSchema),z.lazy(() => BankConnectionSettingsCreateWithoutWebhooksInputSchema).array(),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BankConnectionSettingsCreateOrConnectWithoutWebhooksInputSchema),z.lazy(() => BankConnectionSettingsCreateOrConnectWithoutWebhooksInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BankConnectionSettingsUncheckedCreateNestedManyWithoutWebhooksInputSchema;
