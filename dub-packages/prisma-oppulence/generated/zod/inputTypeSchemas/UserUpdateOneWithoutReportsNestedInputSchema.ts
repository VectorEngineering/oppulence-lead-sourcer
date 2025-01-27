import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutReportsInputSchema } from './UserCreateWithoutReportsInputSchema';
import { UserUncheckedCreateWithoutReportsInputSchema } from './UserUncheckedCreateWithoutReportsInputSchema';
import { UserCreateOrConnectWithoutReportsInputSchema } from './UserCreateOrConnectWithoutReportsInputSchema';
import { UserUpsertWithoutReportsInputSchema } from './UserUpsertWithoutReportsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutReportsInputSchema } from './UserUpdateToOneWithWhereWithoutReportsInputSchema';
import { UserUpdateWithoutReportsInputSchema } from './UserUpdateWithoutReportsInputSchema';
import { UserUncheckedUpdateWithoutReportsInputSchema } from './UserUncheckedUpdateWithoutReportsInputSchema';

export const UserUpdateOneWithoutReportsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutReportsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReportsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReportsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReportsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReportsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutReportsInputSchema),z.lazy(() => UserUpdateWithoutReportsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReportsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutReportsNestedInputSchema;
