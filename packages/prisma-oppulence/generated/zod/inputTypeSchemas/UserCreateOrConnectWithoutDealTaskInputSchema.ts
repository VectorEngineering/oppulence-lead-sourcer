import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutDealTaskInputSchema } from './UserCreateWithoutDealTaskInputSchema';
import { UserUncheckedCreateWithoutDealTaskInputSchema } from './UserUncheckedCreateWithoutDealTaskInputSchema';

export const UserCreateOrConnectWithoutDealTaskInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDealTaskInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutDealTaskInputSchema),z.lazy(() => UserUncheckedCreateWithoutDealTaskInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutDealTaskInputSchema;
