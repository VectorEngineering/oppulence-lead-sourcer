import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutDealTaskInputSchema } from './UserUpdateWithoutDealTaskInputSchema';
import { UserUncheckedUpdateWithoutDealTaskInputSchema } from './UserUncheckedUpdateWithoutDealTaskInputSchema';

export const UserUpdateToOneWithWhereWithoutDealTaskInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDealTaskInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutDealTaskInputSchema),z.lazy(() => UserUncheckedUpdateWithoutDealTaskInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutDealTaskInputSchema;
