import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenCreateManyInstalledIntegrationInputSchema } from './OAuthRefreshTokenCreateManyInstalledIntegrationInputSchema';

export const OAuthRefreshTokenCreateManyInstalledIntegrationInputEnvelopeSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateManyInstalledIntegrationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OAuthRefreshTokenCreateManyInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenCreateManyInstalledIntegrationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OAuthRefreshTokenCreateManyInstalledIntegrationInputEnvelopeSchema;
