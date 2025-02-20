import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsCreateWithoutCreatorInputSchema } from './BankConnectionSettingsCreateWithoutCreatorInputSchema';
import { BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema';
import { BankConnectionSettingsCreateOrConnectWithoutCreatorInputSchema } from './BankConnectionSettingsCreateOrConnectWithoutCreatorInputSchema';
import { BankConnectionSettingsCreateManyCreatorInputEnvelopeSchema } from './BankConnectionSettingsCreateManyCreatorInputEnvelopeSchema';
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema';

export const BankConnectionSettingsUncheckedCreateNestedManyWithoutCreatorInputSchema: z.ZodType<Prisma.BankConnectionSettingsUncheckedCreateNestedManyWithoutCreatorInput> = z.object({
  create: z.union([ z.lazy(() => BankConnectionSettingsCreateWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsCreateWithoutCreatorInputSchema).array(),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BankConnectionSettingsCreateOrConnectWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsCreateOrConnectWithoutCreatorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BankConnectionSettingsCreateManyCreatorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BankConnectionSettingsUncheckedCreateNestedManyWithoutCreatorInputSchema;
