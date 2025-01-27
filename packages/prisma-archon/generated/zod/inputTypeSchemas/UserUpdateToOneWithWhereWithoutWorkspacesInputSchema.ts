import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutWorkspacesInputSchema } from './UserUpdateWithoutWorkspacesInputSchema';
import { UserUncheckedUpdateWithoutWorkspacesInputSchema } from './UserUncheckedUpdateWithoutWorkspacesInputSchema';

export const UserUpdateToOneWithWhereWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkspacesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutWorkspacesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWorkspacesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutWorkspacesInputSchema;
