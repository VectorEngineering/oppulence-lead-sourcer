import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenCreateWithoutRefreshTokensInputSchema } from './RestrictedTokenCreateWithoutRefreshTokensInputSchema';
import { RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema } from './RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema';
import { RestrictedTokenCreateOrConnectWithoutRefreshTokensInputSchema } from './RestrictedTokenCreateOrConnectWithoutRefreshTokensInputSchema';
import { RestrictedTokenUpsertWithoutRefreshTokensInputSchema } from './RestrictedTokenUpsertWithoutRefreshTokensInputSchema';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenUpdateToOneWithWhereWithoutRefreshTokensInputSchema } from './RestrictedTokenUpdateToOneWithWhereWithoutRefreshTokensInputSchema';
import { RestrictedTokenUpdateWithoutRefreshTokensInputSchema } from './RestrictedTokenUpdateWithoutRefreshTokensInputSchema';
import { RestrictedTokenUncheckedUpdateWithoutRefreshTokensInputSchema } from './RestrictedTokenUncheckedUpdateWithoutRefreshTokensInputSchema';

export const RestrictedTokenUpdateOneRequiredWithoutRefreshTokensNestedInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateOneRequiredWithoutRefreshTokensNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutRefreshTokensInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestrictedTokenCreateOrConnectWithoutRefreshTokensInputSchema).optional(),
  upsert: z.lazy(() => RestrictedTokenUpsertWithoutRefreshTokensInputSchema).optional(),
  connect: z.lazy(() => RestrictedTokenWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestrictedTokenUpdateToOneWithWhereWithoutRefreshTokensInputSchema),z.lazy(() => RestrictedTokenUpdateWithoutRefreshTokensInputSchema),z.lazy(() => RestrictedTokenUncheckedUpdateWithoutRefreshTokensInputSchema) ]).optional(),
}).strict();

export default RestrictedTokenUpdateOneRequiredWithoutRefreshTokensNestedInputSchema;
