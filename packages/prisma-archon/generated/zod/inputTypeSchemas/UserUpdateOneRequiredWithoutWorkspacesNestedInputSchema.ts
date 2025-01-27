import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutWorkspacesInputSchema } from './UserCreateWithoutWorkspacesInputSchema';
import { UserUncheckedCreateWithoutWorkspacesInputSchema } from './UserUncheckedCreateWithoutWorkspacesInputSchema';
import { UserCreateOrConnectWithoutWorkspacesInputSchema } from './UserCreateOrConnectWithoutWorkspacesInputSchema';
import { UserUpsertWithoutWorkspacesInputSchema } from './UserUpsertWithoutWorkspacesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutWorkspacesInputSchema } from './UserUpdateToOneWithWhereWithoutWorkspacesInputSchema';
import { UserUpdateWithoutWorkspacesInputSchema } from './UserUpdateWithoutWorkspacesInputSchema';
import { UserUncheckedUpdateWithoutWorkspacesInputSchema } from './UserUncheckedUpdateWithoutWorkspacesInputSchema';

export const UserUpdateOneRequiredWithoutWorkspacesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkspacesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutWorkspacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutWorkspacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkspacesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWorkspacesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutWorkspacesInputSchema),z.lazy(() => UserUpdateWithoutWorkspacesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWorkspacesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutWorkspacesNestedInputSchema;
