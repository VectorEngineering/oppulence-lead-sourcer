import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutDealInputSchema } from './UserCreateWithoutDealInputSchema';
import { UserUncheckedCreateWithoutDealInputSchema } from './UserUncheckedCreateWithoutDealInputSchema';
import { UserCreateOrConnectWithoutDealInputSchema } from './UserCreateOrConnectWithoutDealInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutDealInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDealInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutDealInputSchema),z.lazy(() => UserUncheckedCreateWithoutDealInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDealInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutDealInputSchema;
