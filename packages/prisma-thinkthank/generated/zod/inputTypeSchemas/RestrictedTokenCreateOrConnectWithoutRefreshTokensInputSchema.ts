import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenCreateWithoutRefreshTokensInputSchema } from './RestrictedTokenCreateWithoutRefreshTokensInputSchema';
import { RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema } from './RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema';

export const RestrictedTokenCreateOrConnectWithoutRefreshTokensInputSchema: z.ZodType<Prisma.RestrictedTokenCreateOrConnectWithoutRefreshTokensInput> = z.object({
  where: z.lazy(() => RestrictedTokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutRefreshTokensInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema) ]),
}).strict();

export default RestrictedTokenCreateOrConnectWithoutRefreshTokensInputSchema;
