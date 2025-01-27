import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutDealInputSchema } from './UserCreateWithoutDealInputSchema';
import { UserUncheckedCreateWithoutDealInputSchema } from './UserUncheckedCreateWithoutDealInputSchema';
import { UserCreateOrConnectWithoutDealInputSchema } from './UserCreateOrConnectWithoutDealInputSchema';
import { UserUpsertWithoutDealInputSchema } from './UserUpsertWithoutDealInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutDealInputSchema } from './UserUpdateToOneWithWhereWithoutDealInputSchema';
import { UserUpdateWithoutDealInputSchema } from './UserUpdateWithoutDealInputSchema';
import { UserUncheckedUpdateWithoutDealInputSchema } from './UserUncheckedUpdateWithoutDealInputSchema';

export const UserUpdateOneWithoutDealNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutDealNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutDealInputSchema),z.lazy(() => UserUncheckedCreateWithoutDealInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDealInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDealInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutDealInputSchema),z.lazy(() => UserUpdateWithoutDealInputSchema),z.lazy(() => UserUncheckedUpdateWithoutDealInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutDealNestedInputSchema;
