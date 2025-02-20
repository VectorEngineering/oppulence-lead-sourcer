import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenWhereUniqueInputSchema } from './OAuthRefreshTokenWhereUniqueInputSchema';
import { OAuthRefreshTokenUpdateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUpdateWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema';

export const OAuthRefreshTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInput> = z.object({
  where: z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OAuthRefreshTokenUpdateWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema) ]),
  create: z.union([ z.lazy(() => OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema) ]),
}).strict();

export default OAuthRefreshTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema;
