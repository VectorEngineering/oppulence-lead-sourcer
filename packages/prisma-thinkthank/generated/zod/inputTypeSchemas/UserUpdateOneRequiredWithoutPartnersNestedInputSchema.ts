import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutPartnersInputSchema } from './UserCreateWithoutPartnersInputSchema';
import { UserUncheckedCreateWithoutPartnersInputSchema } from './UserUncheckedCreateWithoutPartnersInputSchema';
import { UserCreateOrConnectWithoutPartnersInputSchema } from './UserCreateOrConnectWithoutPartnersInputSchema';
import { UserUpsertWithoutPartnersInputSchema } from './UserUpsertWithoutPartnersInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutPartnersInputSchema } from './UserUpdateToOneWithWhereWithoutPartnersInputSchema';
import { UserUpdateWithoutPartnersInputSchema } from './UserUpdateWithoutPartnersInputSchema';
import { UserUncheckedUpdateWithoutPartnersInputSchema } from './UserUncheckedUpdateWithoutPartnersInputSchema';

export const UserUpdateOneRequiredWithoutPartnersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPartnersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPartnersInputSchema),z.lazy(() => UserUncheckedCreateWithoutPartnersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPartnersInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPartnersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutPartnersInputSchema),z.lazy(() => UserUpdateWithoutPartnersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPartnersInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutPartnersNestedInputSchema;
