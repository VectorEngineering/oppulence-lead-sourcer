import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutLinksInputSchema } from './UserUpdateWithoutLinksInputSchema';
import { UserUncheckedUpdateWithoutLinksInputSchema } from './UserUncheckedUpdateWithoutLinksInputSchema';

export const UserUpdateToOneWithWhereWithoutLinksInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLinksInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutLinksInputSchema),z.lazy(() => UserUncheckedUpdateWithoutLinksInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutLinksInputSchema;
