import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenWhereUniqueInputSchema } from './OAuthRefreshTokenWhereUniqueInputSchema';
import { OAuthRefreshTokenCreateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenCreateWithoutAccessTokenInputSchema';
import { OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema';

export const OAuthRefreshTokenCreateOrConnectWithoutAccessTokenInputSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateOrConnectWithoutAccessTokenInput> = z.object({
  where: z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OAuthRefreshTokenCreateWithoutAccessTokenInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema) ]),
}).strict();

export default OAuthRefreshTokenCreateOrConnectWithoutAccessTokenInputSchema;
