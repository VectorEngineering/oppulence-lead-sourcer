import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenWhereUniqueInputSchema } from './OAuthRefreshTokenWhereUniqueInputSchema';
import { OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema';

export const OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInput> = z.object({
  where: z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema) ]),
}).strict();

export default OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInputSchema;
