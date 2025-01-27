import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutOAuthCodesInputSchema } from './UserCreateWithoutOAuthCodesInputSchema';
import { UserUncheckedCreateWithoutOAuthCodesInputSchema } from './UserUncheckedCreateWithoutOAuthCodesInputSchema';
import { UserCreateOrConnectWithoutOAuthCodesInputSchema } from './UserCreateOrConnectWithoutOAuthCodesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutOAuthCodesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOAuthCodesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOAuthCodesInputSchema),z.lazy(() => UserUncheckedCreateWithoutOAuthCodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOAuthCodesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutOAuthCodesInputSchema;
