import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenCreateManyInstalledIntegrationInputEnvelopeSchema } from './OAuthRefreshTokenCreateManyInstalledIntegrationInputEnvelopeSchema';
import { OAuthRefreshTokenWhereUniqueInputSchema } from './OAuthRefreshTokenWhereUniqueInputSchema';

export const OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInput> = z.object({
  create: z.union([ z.lazy(() => OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema).array(),z.lazy(() => OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OAuthRefreshTokenCreateManyInstalledIntegrationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema;
