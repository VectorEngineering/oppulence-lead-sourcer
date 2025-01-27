import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutInstalledIntegrationsInputSchema } from './UserCreateWithoutInstalledIntegrationsInputSchema';
import { UserUncheckedCreateWithoutInstalledIntegrationsInputSchema } from './UserUncheckedCreateWithoutInstalledIntegrationsInputSchema';
import { UserCreateOrConnectWithoutInstalledIntegrationsInputSchema } from './UserCreateOrConnectWithoutInstalledIntegrationsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutInstalledIntegrationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInstalledIntegrationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInstalledIntegrationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutInstalledIntegrationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInstalledIntegrationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutInstalledIntegrationsInputSchema;
