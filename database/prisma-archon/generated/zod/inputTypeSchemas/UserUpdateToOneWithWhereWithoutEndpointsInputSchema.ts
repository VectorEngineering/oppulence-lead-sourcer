import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutEndpointsInputSchema } from './UserUpdateWithoutEndpointsInputSchema';
import { UserUncheckedUpdateWithoutEndpointsInputSchema } from './UserUncheckedUpdateWithoutEndpointsInputSchema';

export const UserUpdateToOneWithWhereWithoutEndpointsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEndpointsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutEndpointsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutEndpointsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutEndpointsInputSchema;
