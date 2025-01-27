import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutWorkspaceMembersInputSchema } from './UserUpdateWithoutWorkspaceMembersInputSchema';
import { UserUncheckedUpdateWithoutWorkspaceMembersInputSchema } from './UserUncheckedUpdateWithoutWorkspaceMembersInputSchema';
import { UserCreateWithoutWorkspaceMembersInputSchema } from './UserCreateWithoutWorkspaceMembersInputSchema';
import { UserUncheckedCreateWithoutWorkspaceMembersInputSchema } from './UserUncheckedCreateWithoutWorkspaceMembersInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutWorkspaceMembersInputSchema: z.ZodType<Prisma.UserUpsertWithoutWorkspaceMembersInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutWorkspaceMembersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWorkspaceMembersInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutWorkspaceMembersInputSchema),z.lazy(() => UserUncheckedCreateWithoutWorkspaceMembersInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutWorkspaceMembersInputSchema;
