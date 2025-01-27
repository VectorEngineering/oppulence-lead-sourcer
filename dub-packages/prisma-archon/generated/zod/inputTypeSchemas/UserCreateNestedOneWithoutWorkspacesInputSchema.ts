import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutWorkspacesInputSchema } from './UserCreateWithoutWorkspacesInputSchema';
import { UserUncheckedCreateWithoutWorkspacesInputSchema } from './UserUncheckedCreateWithoutWorkspacesInputSchema';
import { UserCreateOrConnectWithoutWorkspacesInputSchema } from './UserCreateOrConnectWithoutWorkspacesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWorkspacesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutWorkspacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutWorkspacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkspacesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutWorkspacesInputSchema;
