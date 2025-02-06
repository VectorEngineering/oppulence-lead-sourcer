import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsCreateWithoutCreatorInputSchema } from './BankConnectionSettingsCreateWithoutCreatorInputSchema';
import { BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema';
import { BankConnectionSettingsCreateOrConnectWithoutCreatorInputSchema } from './BankConnectionSettingsCreateOrConnectWithoutCreatorInputSchema';
import { BankConnectionSettingsUpsertWithWhereUniqueWithoutCreatorInputSchema } from './BankConnectionSettingsUpsertWithWhereUniqueWithoutCreatorInputSchema';
import { BankConnectionSettingsCreateManyCreatorInputEnvelopeSchema } from './BankConnectionSettingsCreateManyCreatorInputEnvelopeSchema';
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema';
import { BankConnectionSettingsUpdateWithWhereUniqueWithoutCreatorInputSchema } from './BankConnectionSettingsUpdateWithWhereUniqueWithoutCreatorInputSchema';
import { BankConnectionSettingsUpdateManyWithWhereWithoutCreatorInputSchema } from './BankConnectionSettingsUpdateManyWithWhereWithoutCreatorInputSchema';
import { BankConnectionSettingsScalarWhereInputSchema } from './BankConnectionSettingsScalarWhereInputSchema';

export const BankConnectionSettingsUpdateManyWithoutCreatorNestedInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpdateManyWithoutCreatorNestedInput> = z.object({
  create: z.union([ z.lazy(() => BankConnectionSettingsCreateWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsCreateWithoutCreatorInputSchema).array(),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BankConnectionSettingsCreateOrConnectWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsCreateOrConnectWithoutCreatorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BankConnectionSettingsUpsertWithWhereUniqueWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsUpsertWithWhereUniqueWithoutCreatorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BankConnectionSettingsCreateManyCreatorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BankConnectionSettingsUpdateWithWhereUniqueWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsUpdateWithWhereUniqueWithoutCreatorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BankConnectionSettingsUpdateManyWithWhereWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsUpdateManyWithWhereWithoutCreatorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BankConnectionSettingsScalarWhereInputSchema),z.lazy(() => BankConnectionSettingsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BankConnectionSettingsUpdateManyWithoutCreatorNestedInputSchema;
