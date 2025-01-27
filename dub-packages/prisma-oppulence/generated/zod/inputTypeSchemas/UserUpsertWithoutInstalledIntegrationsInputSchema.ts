import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutInstalledIntegrationsInputSchema } from './UserUpdateWithoutInstalledIntegrationsInputSchema';
import { UserUncheckedUpdateWithoutInstalledIntegrationsInputSchema } from './UserUncheckedUpdateWithoutInstalledIntegrationsInputSchema';
import { UserCreateWithoutInstalledIntegrationsInputSchema } from './UserCreateWithoutInstalledIntegrationsInputSchema';
import { UserUncheckedCreateWithoutInstalledIntegrationsInputSchema } from './UserUncheckedCreateWithoutInstalledIntegrationsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutInstalledIntegrationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutInstalledIntegrationsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutInstalledIntegrationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInstalledIntegrationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutInstalledIntegrationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutInstalledIntegrationsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutInstalledIntegrationsInputSchema;
