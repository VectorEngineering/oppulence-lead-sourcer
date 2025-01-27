import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthCodeCreateManyOAuthAppInputSchema } from './OAuthCodeCreateManyOAuthAppInputSchema';

export const OAuthCodeCreateManyOAuthAppInputEnvelopeSchema: z.ZodType<Prisma.OAuthCodeCreateManyOAuthAppInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OAuthCodeCreateManyOAuthAppInputSchema),z.lazy(() => OAuthCodeCreateManyOAuthAppInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OAuthCodeCreateManyOAuthAppInputEnvelopeSchema;
