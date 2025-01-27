import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutEndpointsInputSchema } from './UserCreateWithoutEndpointsInputSchema';
import { UserUncheckedCreateWithoutEndpointsInputSchema } from './UserUncheckedCreateWithoutEndpointsInputSchema';

export const UserCreateOrConnectWithoutEndpointsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutEndpointsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutEndpointsInputSchema),z.lazy(() => UserUncheckedCreateWithoutEndpointsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutEndpointsInputSchema;
