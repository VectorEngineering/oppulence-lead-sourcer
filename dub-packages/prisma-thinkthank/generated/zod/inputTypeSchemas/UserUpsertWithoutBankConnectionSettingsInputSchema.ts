import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutBankConnectionSettingsInputSchema } from './UserUpdateWithoutBankConnectionSettingsInputSchema';
import { UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema } from './UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema';
import { UserCreateWithoutBankConnectionSettingsInputSchema } from './UserCreateWithoutBankConnectionSettingsInputSchema';
import { UserUncheckedCreateWithoutBankConnectionSettingsInputSchema } from './UserUncheckedCreateWithoutBankConnectionSettingsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.UserUpsertWithoutBankConnectionSettingsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutBankConnectionSettingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutBankConnectionSettingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBankConnectionSettingsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutBankConnectionSettingsInputSchema;
