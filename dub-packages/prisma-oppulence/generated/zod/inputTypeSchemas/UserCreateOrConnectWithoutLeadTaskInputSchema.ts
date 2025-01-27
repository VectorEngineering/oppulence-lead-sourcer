import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutLeadTaskInputSchema } from './UserCreateWithoutLeadTaskInputSchema';
import { UserUncheckedCreateWithoutLeadTaskInputSchema } from './UserUncheckedCreateWithoutLeadTaskInputSchema';

export const UserCreateOrConnectWithoutLeadTaskInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLeadTaskInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutLeadTaskInputSchema),z.lazy(() => UserUncheckedCreateWithoutLeadTaskInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutLeadTaskInputSchema;
