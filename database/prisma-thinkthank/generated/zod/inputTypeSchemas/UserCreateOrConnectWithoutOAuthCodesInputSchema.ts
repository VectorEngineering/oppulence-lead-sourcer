import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutOAuthCodesInputSchema } from './UserCreateWithoutOAuthCodesInputSchema';
import { UserUncheckedCreateWithoutOAuthCodesInputSchema } from './UserUncheckedCreateWithoutOAuthCodesInputSchema';

export const UserCreateOrConnectWithoutOAuthCodesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOAuthCodesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutOAuthCodesInputSchema),z.lazy(() => UserUncheckedCreateWithoutOAuthCodesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutOAuthCodesInputSchema;
