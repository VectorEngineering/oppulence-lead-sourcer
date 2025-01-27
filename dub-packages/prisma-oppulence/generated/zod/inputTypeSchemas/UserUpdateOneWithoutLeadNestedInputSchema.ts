import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutLeadInputSchema } from './UserCreateWithoutLeadInputSchema';
import { UserUncheckedCreateWithoutLeadInputSchema } from './UserUncheckedCreateWithoutLeadInputSchema';
import { UserCreateOrConnectWithoutLeadInputSchema } from './UserCreateOrConnectWithoutLeadInputSchema';
import { UserUpsertWithoutLeadInputSchema } from './UserUpsertWithoutLeadInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutLeadInputSchema } from './UserUpdateToOneWithWhereWithoutLeadInputSchema';
import { UserUpdateWithoutLeadInputSchema } from './UserUpdateWithoutLeadInputSchema';
import { UserUncheckedUpdateWithoutLeadInputSchema } from './UserUncheckedUpdateWithoutLeadInputSchema';

export const UserUpdateOneWithoutLeadNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutLeadInputSchema),z.lazy(() => UserUncheckedCreateWithoutLeadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLeadInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutLeadInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutLeadInputSchema),z.lazy(() => UserUpdateWithoutLeadInputSchema),z.lazy(() => UserUncheckedUpdateWithoutLeadInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutLeadNestedInputSchema;
