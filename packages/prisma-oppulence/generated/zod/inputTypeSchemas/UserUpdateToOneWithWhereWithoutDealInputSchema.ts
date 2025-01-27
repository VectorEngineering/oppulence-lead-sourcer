import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutDealInputSchema } from './UserUpdateWithoutDealInputSchema';
import { UserUncheckedUpdateWithoutDealInputSchema } from './UserUncheckedUpdateWithoutDealInputSchema';

export const UserUpdateToOneWithWhereWithoutDealInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDealInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutDealInputSchema),z.lazy(() => UserUncheckedUpdateWithoutDealInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutDealInputSchema;
