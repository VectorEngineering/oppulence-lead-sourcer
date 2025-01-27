import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutLeadInputSchema } from './UserCreateWithoutLeadInputSchema';
import { UserUncheckedCreateWithoutLeadInputSchema } from './UserUncheckedCreateWithoutLeadInputSchema';

export const UserCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutLeadInputSchema),z.lazy(() => UserUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutLeadInputSchema;
