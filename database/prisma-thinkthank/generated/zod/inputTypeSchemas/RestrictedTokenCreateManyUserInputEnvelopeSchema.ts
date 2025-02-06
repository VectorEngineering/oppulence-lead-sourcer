import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenCreateManyUserInputSchema } from './RestrictedTokenCreateManyUserInputSchema';

export const RestrictedTokenCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.RestrictedTokenCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RestrictedTokenCreateManyUserInputSchema),z.lazy(() => RestrictedTokenCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RestrictedTokenCreateManyUserInputEnvelopeSchema;
