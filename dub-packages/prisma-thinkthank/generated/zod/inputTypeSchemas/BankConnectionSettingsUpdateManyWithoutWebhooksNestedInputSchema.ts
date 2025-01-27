import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsCreateWithoutWebhooksInputSchema } from './BankConnectionSettingsCreateWithoutWebhooksInputSchema';
import { BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema';
import { BankConnectionSettingsCreateOrConnectWithoutWebhooksInputSchema } from './BankConnectionSettingsCreateOrConnectWithoutWebhooksInputSchema';
import { BankConnectionSettingsUpsertWithWhereUniqueWithoutWebhooksInputSchema } from './BankConnectionSettingsUpsertWithWhereUniqueWithoutWebhooksInputSchema';
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema';
import { BankConnectionSettingsUpdateWithWhereUniqueWithoutWebhooksInputSchema } from './BankConnectionSettingsUpdateWithWhereUniqueWithoutWebhooksInputSchema';
import { BankConnectionSettingsUpdateManyWithWhereWithoutWebhooksInputSchema } from './BankConnectionSettingsUpdateManyWithWhereWithoutWebhooksInputSchema';
import { BankConnectionSettingsScalarWhereInputSchema } from './BankConnectionSettingsScalarWhereInputSchema';

export const BankConnectionSettingsUpdateManyWithoutWebhooksNestedInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpdateManyWithoutWebhooksNestedInput> = z.object({
  create: z.union([ z.lazy(() => BankConnectionSettingsCreateWithoutWebhooksInputSchema),z.lazy(() => BankConnectionSettingsCreateWithoutWebhooksInputSchema).array(),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BankConnectionSettingsCreateOrConnectWithoutWebhooksInputSchema),z.lazy(() => BankConnectionSettingsCreateOrConnectWithoutWebhooksInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BankConnectionSettingsUpsertWithWhereUniqueWithoutWebhooksInputSchema),z.lazy(() => BankConnectionSettingsUpsertWithWhereUniqueWithoutWebhooksInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BankConnectionSettingsUpdateWithWhereUniqueWithoutWebhooksInputSchema),z.lazy(() => BankConnectionSettingsUpdateWithWhereUniqueWithoutWebhooksInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BankConnectionSettingsUpdateManyWithWhereWithoutWebhooksInputSchema),z.lazy(() => BankConnectionSettingsUpdateManyWithWhereWithoutWebhooksInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BankConnectionSettingsScalarWhereInputSchema),z.lazy(() => BankConnectionSettingsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BankConnectionSettingsUpdateManyWithoutWebhooksNestedInputSchema;
