import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBankAccountsInputSchema } from './UserCreateWithoutBankAccountsInputSchema';
import { UserUncheckedCreateWithoutBankAccountsInputSchema } from './UserUncheckedCreateWithoutBankAccountsInputSchema';
import { UserCreateOrConnectWithoutBankAccountsInputSchema } from './UserCreateOrConnectWithoutBankAccountsInputSchema';
import { UserUpsertWithoutBankAccountsInputSchema } from './UserUpsertWithoutBankAccountsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutBankAccountsInputSchema } from './UserUpdateToOneWithWhereWithoutBankAccountsInputSchema';
import { UserUpdateWithoutBankAccountsInputSchema } from './UserUpdateWithoutBankAccountsInputSchema';
import { UserUncheckedUpdateWithoutBankAccountsInputSchema } from './UserUncheckedUpdateWithoutBankAccountsInputSchema';

export const UserUpdateOneRequiredWithoutBankAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBankAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBankAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBankAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBankAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBankAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBankAccountsInputSchema),z.lazy(() => UserUpdateWithoutBankAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBankAccountsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutBankAccountsNestedInputSchema;
