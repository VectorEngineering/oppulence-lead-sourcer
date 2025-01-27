import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBankAccountsInputSchema } from './UserCreateWithoutBankAccountsInputSchema';
import { UserUncheckedCreateWithoutBankAccountsInputSchema } from './UserUncheckedCreateWithoutBankAccountsInputSchema';
import { UserCreateOrConnectWithoutBankAccountsInputSchema } from './UserCreateOrConnectWithoutBankAccountsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutBankAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBankAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBankAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBankAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBankAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutBankAccountsInputSchema;
