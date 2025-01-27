import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUtmTemplatesInputSchema } from './UserCreateWithoutUtmTemplatesInputSchema';
import { UserUncheckedCreateWithoutUtmTemplatesInputSchema } from './UserUncheckedCreateWithoutUtmTemplatesInputSchema';

export const UserCreateOrConnectWithoutUtmTemplatesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUtmTemplatesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUtmTemplatesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUtmTemplatesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUtmTemplatesInputSchema;
