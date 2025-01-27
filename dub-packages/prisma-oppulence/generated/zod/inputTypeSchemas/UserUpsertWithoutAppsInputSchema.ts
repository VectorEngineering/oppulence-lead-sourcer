import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutAppsInputSchema } from './UserUpdateWithoutAppsInputSchema';
import { UserUncheckedUpdateWithoutAppsInputSchema } from './UserUncheckedUpdateWithoutAppsInputSchema';
import { UserCreateWithoutAppsInputSchema } from './UserCreateWithoutAppsInputSchema';
import { UserUncheckedCreateWithoutAppsInputSchema } from './UserUncheckedCreateWithoutAppsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutAppsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAppsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAppsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAppsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAppsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAppsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutAppsInputSchema;
