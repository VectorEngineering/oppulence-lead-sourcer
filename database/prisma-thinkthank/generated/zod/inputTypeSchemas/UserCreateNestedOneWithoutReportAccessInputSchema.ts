import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutReportAccessInputSchema } from './UserCreateWithoutReportAccessInputSchema';
import { UserUncheckedCreateWithoutReportAccessInputSchema } from './UserUncheckedCreateWithoutReportAccessInputSchema';
import { UserCreateOrConnectWithoutReportAccessInputSchema } from './UserCreateOrConnectWithoutReportAccessInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutReportAccessInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReportAccessInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReportAccessInputSchema),z.lazy(() => UserUncheckedCreateWithoutReportAccessInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReportAccessInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutReportAccessInputSchema;
