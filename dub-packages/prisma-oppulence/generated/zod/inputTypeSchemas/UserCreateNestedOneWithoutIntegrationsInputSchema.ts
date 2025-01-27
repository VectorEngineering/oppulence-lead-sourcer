import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutIntegrationsInputSchema } from './UserCreateWithoutIntegrationsInputSchema';
import { UserUncheckedCreateWithoutIntegrationsInputSchema } from './UserUncheckedCreateWithoutIntegrationsInputSchema';
import { UserCreateOrConnectWithoutIntegrationsInputSchema } from './UserCreateOrConnectWithoutIntegrationsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutIntegrationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutIntegrationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutIntegrationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutIntegrationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutIntegrationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutIntegrationsInputSchema;
