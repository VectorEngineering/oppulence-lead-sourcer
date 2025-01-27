import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAppsInputSchema } from './UserCreateWithoutAppsInputSchema';
import { UserUncheckedCreateWithoutAppsInputSchema } from './UserUncheckedCreateWithoutAppsInputSchema';
import { UserCreateOrConnectWithoutAppsInputSchema } from './UserCreateOrConnectWithoutAppsInputSchema';
import { UserUpsertWithoutAppsInputSchema } from './UserUpsertWithoutAppsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutAppsInputSchema } from './UserUpdateToOneWithWhereWithoutAppsInputSchema';
import { UserUpdateWithoutAppsInputSchema } from './UserUpdateWithoutAppsInputSchema';
import { UserUncheckedUpdateWithoutAppsInputSchema } from './UserUncheckedUpdateWithoutAppsInputSchema';

export const UserUpdateOneRequiredWithoutAppsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAppsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAppsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAppsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAppsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAppsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAppsInputSchema),z.lazy(() => UserUpdateWithoutAppsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAppsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutAppsNestedInputSchema;
