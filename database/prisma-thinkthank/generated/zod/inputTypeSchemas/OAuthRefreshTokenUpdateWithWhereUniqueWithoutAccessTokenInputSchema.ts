import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenWhereUniqueInputSchema } from './OAuthRefreshTokenWhereUniqueInputSchema';
import { OAuthRefreshTokenUpdateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUpdateWithoutAccessTokenInputSchema';
import { OAuthRefreshTokenUncheckedUpdateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUncheckedUpdateWithoutAccessTokenInputSchema';

export const OAuthRefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInput> = z.object({
  where: z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OAuthRefreshTokenUpdateWithoutAccessTokenInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedUpdateWithoutAccessTokenInputSchema) ]),
}).strict();

export default OAuthRefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInputSchema;
