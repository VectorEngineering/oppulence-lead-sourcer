import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutWorkspaceMembersInputSchema } from './UserUpdateWithoutWorkspaceMembersInputSchema';
import { UserUncheckedUpdateWithoutWorkspaceMembersInputSchema } from './UserUncheckedUpdateWithoutWorkspaceMembersInputSchema';

export const UserUpdateToOneWithWhereWithoutWorkspaceMembersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkspaceMembersInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutWorkspaceMembersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWorkspaceMembersInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutWorkspaceMembersInputSchema;
