import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUtmTemplatesInputSchema } from './UserCreateWithoutUtmTemplatesInputSchema';
import { UserUncheckedCreateWithoutUtmTemplatesInputSchema } from './UserUncheckedCreateWithoutUtmTemplatesInputSchema';
import { UserCreateOrConnectWithoutUtmTemplatesInputSchema } from './UserCreateOrConnectWithoutUtmTemplatesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUtmTemplatesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUtmTemplatesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUtmTemplatesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUtmTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUtmTemplatesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUtmTemplatesInputSchema;
