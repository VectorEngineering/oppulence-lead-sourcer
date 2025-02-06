import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBankConnectionSettingsInputSchema } from './UserCreateWithoutBankConnectionSettingsInputSchema';
import { UserUncheckedCreateWithoutBankConnectionSettingsInputSchema } from './UserUncheckedCreateWithoutBankConnectionSettingsInputSchema';
import { UserCreateOrConnectWithoutBankConnectionSettingsInputSchema } from './UserCreateOrConnectWithoutBankConnectionSettingsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBankConnectionSettingsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBankConnectionSettingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBankConnectionSettingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBankConnectionSettingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutBankConnectionSettingsInputSchema;
