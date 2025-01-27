import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutLeadTaskInputSchema } from './UserCreateWithoutLeadTaskInputSchema';
import { UserUncheckedCreateWithoutLeadTaskInputSchema } from './UserUncheckedCreateWithoutLeadTaskInputSchema';
import { UserCreateOrConnectWithoutLeadTaskInputSchema } from './UserCreateOrConnectWithoutLeadTaskInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutLeadTaskInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutLeadTaskInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutLeadTaskInputSchema),z.lazy(() => UserUncheckedCreateWithoutLeadTaskInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLeadTaskInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutLeadTaskInputSchema;
