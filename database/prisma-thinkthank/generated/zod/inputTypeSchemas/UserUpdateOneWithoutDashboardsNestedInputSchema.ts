import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutDashboardsInputSchema } from './UserCreateWithoutDashboardsInputSchema';
import { UserUncheckedCreateWithoutDashboardsInputSchema } from './UserUncheckedCreateWithoutDashboardsInputSchema';
import { UserCreateOrConnectWithoutDashboardsInputSchema } from './UserCreateOrConnectWithoutDashboardsInputSchema';
import { UserUpsertWithoutDashboardsInputSchema } from './UserUpsertWithoutDashboardsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutDashboardsInputSchema } from './UserUpdateToOneWithWhereWithoutDashboardsInputSchema';
import { UserUpdateWithoutDashboardsInputSchema } from './UserUpdateWithoutDashboardsInputSchema';
import { UserUncheckedUpdateWithoutDashboardsInputSchema } from './UserUncheckedUpdateWithoutDashboardsInputSchema';

export const UserUpdateOneWithoutDashboardsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutDashboardsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutDashboardsInputSchema),z.lazy(() => UserUncheckedCreateWithoutDashboardsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDashboardsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDashboardsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutDashboardsInputSchema),z.lazy(() => UserUpdateWithoutDashboardsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutDashboardsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutDashboardsNestedInputSchema;
