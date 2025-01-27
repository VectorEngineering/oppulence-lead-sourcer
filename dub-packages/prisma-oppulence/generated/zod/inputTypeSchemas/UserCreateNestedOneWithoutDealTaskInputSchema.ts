import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutDealTaskInputSchema } from './UserCreateWithoutDealTaskInputSchema';
import { UserUncheckedCreateWithoutDealTaskInputSchema } from './UserUncheckedCreateWithoutDealTaskInputSchema';
import { UserCreateOrConnectWithoutDealTaskInputSchema } from './UserCreateOrConnectWithoutDealTaskInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutDealTaskInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDealTaskInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutDealTaskInputSchema),z.lazy(() => UserUncheckedCreateWithoutDealTaskInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDealTaskInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutDealTaskInputSchema;
