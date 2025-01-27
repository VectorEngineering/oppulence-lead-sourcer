import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutEndpointsInputSchema } from './UserCreateWithoutEndpointsInputSchema';
import { UserUncheckedCreateWithoutEndpointsInputSchema } from './UserUncheckedCreateWithoutEndpointsInputSchema';
import { UserCreateOrConnectWithoutEndpointsInputSchema } from './UserCreateOrConnectWithoutEndpointsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutEndpointsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutEndpointsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutEndpointsInputSchema),z.lazy(() => UserUncheckedCreateWithoutEndpointsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEndpointsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutEndpointsInputSchema;
