import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutAppsInputSchema } from './UserCreateWithoutAppsInputSchema';
import { UserUncheckedCreateWithoutAppsInputSchema } from './UserUncheckedCreateWithoutAppsInputSchema';

export const UserCreateOrConnectWithoutAppsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAppsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAppsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAppsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutAppsInputSchema;
