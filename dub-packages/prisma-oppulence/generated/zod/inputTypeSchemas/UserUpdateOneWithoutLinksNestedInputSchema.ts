import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutLinksInputSchema } from './UserCreateWithoutLinksInputSchema';
import { UserUncheckedCreateWithoutLinksInputSchema } from './UserUncheckedCreateWithoutLinksInputSchema';
import { UserCreateOrConnectWithoutLinksInputSchema } from './UserCreateOrConnectWithoutLinksInputSchema';
import { UserUpsertWithoutLinksInputSchema } from './UserUpsertWithoutLinksInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutLinksInputSchema } from './UserUpdateToOneWithWhereWithoutLinksInputSchema';
import { UserUpdateWithoutLinksInputSchema } from './UserUpdateWithoutLinksInputSchema';
import { UserUncheckedUpdateWithoutLinksInputSchema } from './UserUncheckedUpdateWithoutLinksInputSchema';

export const UserUpdateOneWithoutLinksNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutLinksNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutLinksInputSchema),z.lazy(() => UserUncheckedCreateWithoutLinksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLinksInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutLinksInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutLinksInputSchema),z.lazy(() => UserUpdateWithoutLinksInputSchema),z.lazy(() => UserUncheckedUpdateWithoutLinksInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutLinksNestedInputSchema;
