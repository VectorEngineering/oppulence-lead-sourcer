import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema';
import { BankConnectionSettingsCreateWithoutCreatorInputSchema } from './BankConnectionSettingsCreateWithoutCreatorInputSchema';
import { BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema';

export const BankConnectionSettingsCreateOrConnectWithoutCreatorInputSchema: z.ZodType<Prisma.BankConnectionSettingsCreateOrConnectWithoutCreatorInput> = z.object({
  where: z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BankConnectionSettingsCreateWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema) ]),
}).strict();

export default BankConnectionSettingsCreateOrConnectWithoutCreatorInputSchema;
