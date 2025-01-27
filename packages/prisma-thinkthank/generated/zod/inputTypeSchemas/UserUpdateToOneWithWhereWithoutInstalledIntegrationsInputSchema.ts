import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutInstalledIntegrationsInputSchema } from './UserUpdateWithoutInstalledIntegrationsInputSchema';
import { UserUncheckedUpdateWithoutInstalledIntegrationsInputSchema } from './UserUncheckedUpdateWithoutInstalledIntegrationsInputSchema';

export const UserUpdateToOneWithWhereWithoutInstalledIntegrationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInstalledIntegrationsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutInstalledIntegrationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInstalledIntegrationsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutInstalledIntegrationsInputSchema;
