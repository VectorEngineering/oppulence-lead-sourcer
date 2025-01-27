import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenWhereUniqueInputSchema } from './OAuthRefreshTokenWhereUniqueInputSchema';
import { OAuthRefreshTokenUpdateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUpdateWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema';

export const OAuthRefreshTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInput> = z.object({
  where: z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OAuthRefreshTokenUpdateWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema) ]),
}).strict();

export default OAuthRefreshTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema;
