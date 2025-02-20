import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenWhereUniqueInputSchema } from './OAuthRefreshTokenWhereUniqueInputSchema';
import { OAuthRefreshTokenUpdateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUpdateWithoutAccessTokenInputSchema';
import { OAuthRefreshTokenUncheckedUpdateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUncheckedUpdateWithoutAccessTokenInputSchema';
import { OAuthRefreshTokenCreateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenCreateWithoutAccessTokenInputSchema';
import { OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema';

export const OAuthRefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInput> = z.object({
  where: z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OAuthRefreshTokenUpdateWithoutAccessTokenInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedUpdateWithoutAccessTokenInputSchema) ]),
  create: z.union([ z.lazy(() => OAuthRefreshTokenCreateWithoutAccessTokenInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema) ]),
}).strict();

export default OAuthRefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInputSchema;
