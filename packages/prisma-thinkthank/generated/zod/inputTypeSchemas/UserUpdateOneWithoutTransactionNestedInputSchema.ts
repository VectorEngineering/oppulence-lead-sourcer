import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutTransactionInputSchema } from './UserCreateWithoutTransactionInputSchema';
import { UserUncheckedCreateWithoutTransactionInputSchema } from './UserUncheckedCreateWithoutTransactionInputSchema';
import { UserCreateOrConnectWithoutTransactionInputSchema } from './UserCreateOrConnectWithoutTransactionInputSchema';
import { UserUpsertWithoutTransactionInputSchema } from './UserUpsertWithoutTransactionInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutTransactionInputSchema } from './UserUpdateToOneWithWhereWithoutTransactionInputSchema';
import { UserUpdateWithoutTransactionInputSchema } from './UserUpdateWithoutTransactionInputSchema';
import { UserUncheckedUpdateWithoutTransactionInputSchema } from './UserUncheckedUpdateWithoutTransactionInputSchema';

export const UserUpdateOneWithoutTransactionNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutTransactionNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTransactionInputSchema),z.lazy(() => UserUncheckedCreateWithoutTransactionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTransactionInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTransactionInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTransactionInputSchema),z.lazy(() => UserUpdateWithoutTransactionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTransactionInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutTransactionNestedInputSchema;
