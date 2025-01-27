import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutReportAccessInputSchema } from './UserCreateWithoutReportAccessInputSchema';
import { UserUncheckedCreateWithoutReportAccessInputSchema } from './UserUncheckedCreateWithoutReportAccessInputSchema';
import { UserCreateOrConnectWithoutReportAccessInputSchema } from './UserCreateOrConnectWithoutReportAccessInputSchema';
import { UserUpsertWithoutReportAccessInputSchema } from './UserUpsertWithoutReportAccessInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutReportAccessInputSchema } from './UserUpdateToOneWithWhereWithoutReportAccessInputSchema';
import { UserUpdateWithoutReportAccessInputSchema } from './UserUpdateWithoutReportAccessInputSchema';
import { UserUncheckedUpdateWithoutReportAccessInputSchema } from './UserUncheckedUpdateWithoutReportAccessInputSchema';

export const UserUpdateOneRequiredWithoutReportAccessNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReportAccessNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReportAccessInputSchema),z.lazy(() => UserUncheckedCreateWithoutReportAccessInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReportAccessInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReportAccessInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutReportAccessInputSchema),z.lazy(() => UserUpdateWithoutReportAccessInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReportAccessInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutReportAccessNestedInputSchema;
