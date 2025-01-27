import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutReportAccessInputSchema } from './UserUpdateWithoutReportAccessInputSchema';
import { UserUncheckedUpdateWithoutReportAccessInputSchema } from './UserUncheckedUpdateWithoutReportAccessInputSchema';
import { UserCreateWithoutReportAccessInputSchema } from './UserCreateWithoutReportAccessInputSchema';
import { UserUncheckedCreateWithoutReportAccessInputSchema } from './UserUncheckedCreateWithoutReportAccessInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutReportAccessInputSchema: z.ZodType<Prisma.UserUpsertWithoutReportAccessInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutReportAccessInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReportAccessInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutReportAccessInputSchema),z.lazy(() => UserUncheckedCreateWithoutReportAccessInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutReportAccessInputSchema;
