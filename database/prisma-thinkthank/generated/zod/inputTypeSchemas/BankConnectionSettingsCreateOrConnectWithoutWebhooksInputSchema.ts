import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema';
import { BankConnectionSettingsCreateWithoutWebhooksInputSchema } from './BankConnectionSettingsCreateWithoutWebhooksInputSchema';
import { BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema';

export const BankConnectionSettingsCreateOrConnectWithoutWebhooksInputSchema: z.ZodType<Prisma.BankConnectionSettingsCreateOrConnectWithoutWebhooksInput> = z.object({
  where: z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BankConnectionSettingsCreateWithoutWebhooksInputSchema),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema) ]),
}).strict();

export default BankConnectionSettingsCreateOrConnectWithoutWebhooksInputSchema;
