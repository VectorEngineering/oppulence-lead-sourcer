import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutLinksInputSchema } from './UserCreateWithoutLinksInputSchema';
import { UserUncheckedCreateWithoutLinksInputSchema } from './UserUncheckedCreateWithoutLinksInputSchema';
import { UserCreateOrConnectWithoutLinksInputSchema } from './UserCreateOrConnectWithoutLinksInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutLinksInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutLinksInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutLinksInputSchema),z.lazy(() => UserUncheckedCreateWithoutLinksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLinksInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutLinksInputSchema;
