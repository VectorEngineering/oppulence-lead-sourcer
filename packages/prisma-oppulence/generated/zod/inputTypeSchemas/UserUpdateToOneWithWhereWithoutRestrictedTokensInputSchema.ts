import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutRestrictedTokensInputSchema } from './UserUpdateWithoutRestrictedTokensInputSchema';
import { UserUncheckedUpdateWithoutRestrictedTokensInputSchema } from './UserUncheckedUpdateWithoutRestrictedTokensInputSchema';

export const UserUpdateToOneWithWhereWithoutRestrictedTokensInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRestrictedTokensInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutRestrictedTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRestrictedTokensInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutRestrictedTokensInputSchema;
