import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthCodeCreateManyProjectInputSchema } from './OAuthCodeCreateManyProjectInputSchema';

export const OAuthCodeCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.OAuthCodeCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OAuthCodeCreateManyProjectInputSchema),z.lazy(() => OAuthCodeCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OAuthCodeCreateManyProjectInputEnvelopeSchema;
