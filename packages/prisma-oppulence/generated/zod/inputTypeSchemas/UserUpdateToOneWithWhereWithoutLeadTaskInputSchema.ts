import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutLeadTaskInputSchema } from './UserUpdateWithoutLeadTaskInputSchema';
import { UserUncheckedUpdateWithoutLeadTaskInputSchema } from './UserUncheckedUpdateWithoutLeadTaskInputSchema';

export const UserUpdateToOneWithWhereWithoutLeadTaskInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLeadTaskInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutLeadTaskInputSchema),z.lazy(() => UserUncheckedUpdateWithoutLeadTaskInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutLeadTaskInputSchema;
