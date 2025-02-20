import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutBankAccountsInputSchema } from './UserUpdateWithoutBankAccountsInputSchema';
import { UserUncheckedUpdateWithoutBankAccountsInputSchema } from './UserUncheckedUpdateWithoutBankAccountsInputSchema';

export const UserUpdateToOneWithWhereWithoutBankAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBankAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBankAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBankAccountsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutBankAccountsInputSchema;
