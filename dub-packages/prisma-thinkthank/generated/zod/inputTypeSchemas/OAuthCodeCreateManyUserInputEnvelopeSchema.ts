import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthCodeCreateManyUserInputSchema } from './OAuthCodeCreateManyUserInputSchema';

export const OAuthCodeCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.OAuthCodeCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OAuthCodeCreateManyUserInputSchema),z.lazy(() => OAuthCodeCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OAuthCodeCreateManyUserInputEnvelopeSchema;
