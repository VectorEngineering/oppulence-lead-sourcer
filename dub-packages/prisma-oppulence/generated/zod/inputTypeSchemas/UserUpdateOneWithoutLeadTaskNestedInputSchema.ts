import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutLeadTaskInputSchema } from './UserCreateWithoutLeadTaskInputSchema';
import { UserUncheckedCreateWithoutLeadTaskInputSchema } from './UserUncheckedCreateWithoutLeadTaskInputSchema';
import { UserCreateOrConnectWithoutLeadTaskInputSchema } from './UserCreateOrConnectWithoutLeadTaskInputSchema';
import { UserUpsertWithoutLeadTaskInputSchema } from './UserUpsertWithoutLeadTaskInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutLeadTaskInputSchema } from './UserUpdateToOneWithWhereWithoutLeadTaskInputSchema';
import { UserUpdateWithoutLeadTaskInputSchema } from './UserUpdateWithoutLeadTaskInputSchema';
import { UserUncheckedUpdateWithoutLeadTaskInputSchema } from './UserUncheckedUpdateWithoutLeadTaskInputSchema';

export const UserUpdateOneWithoutLeadTaskNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutLeadTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutLeadTaskInputSchema),z.lazy(() => UserUncheckedCreateWithoutLeadTaskInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLeadTaskInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutLeadTaskInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutLeadTaskInputSchema),z.lazy(() => UserUpdateWithoutLeadTaskInputSchema),z.lazy(() => UserUncheckedUpdateWithoutLeadTaskInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutLeadTaskNestedInputSchema;
