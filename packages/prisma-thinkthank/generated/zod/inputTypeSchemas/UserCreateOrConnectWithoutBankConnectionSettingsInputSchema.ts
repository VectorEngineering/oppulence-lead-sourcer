import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutBankConnectionSettingsInputSchema } from './UserCreateWithoutBankConnectionSettingsInputSchema';
import { UserUncheckedCreateWithoutBankConnectionSettingsInputSchema } from './UserUncheckedCreateWithoutBankConnectionSettingsInputSchema';

export const UserCreateOrConnectWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBankConnectionSettingsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBankConnectionSettingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBankConnectionSettingsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutBankConnectionSettingsInputSchema;
