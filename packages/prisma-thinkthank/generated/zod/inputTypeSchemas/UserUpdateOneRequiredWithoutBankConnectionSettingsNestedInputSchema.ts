import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBankConnectionSettingsInputSchema } from './UserCreateWithoutBankConnectionSettingsInputSchema';
import { UserUncheckedCreateWithoutBankConnectionSettingsInputSchema } from './UserUncheckedCreateWithoutBankConnectionSettingsInputSchema';
import { UserCreateOrConnectWithoutBankConnectionSettingsInputSchema } from './UserCreateOrConnectWithoutBankConnectionSettingsInputSchema';
import { UserUpsertWithoutBankConnectionSettingsInputSchema } from './UserUpsertWithoutBankConnectionSettingsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutBankConnectionSettingsInputSchema } from './UserUpdateToOneWithWhereWithoutBankConnectionSettingsInputSchema';
import { UserUpdateWithoutBankConnectionSettingsInputSchema } from './UserUpdateWithoutBankConnectionSettingsInputSchema';
import { UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema } from './UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema';

export const UserUpdateOneRequiredWithoutBankConnectionSettingsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBankConnectionSettingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBankConnectionSettingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBankConnectionSettingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBankConnectionSettingsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBankConnectionSettingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBankConnectionSettingsInputSchema),z.lazy(() => UserUpdateWithoutBankConnectionSettingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutBankConnectionSettingsNestedInputSchema;
