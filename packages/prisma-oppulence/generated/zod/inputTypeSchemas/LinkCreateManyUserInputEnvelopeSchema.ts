import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateManyUserInputSchema } from './LinkCreateManyUserInputSchema';

export const LinkCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.LinkCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LinkCreateManyUserInputSchema),z.lazy(() => LinkCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LinkCreateManyUserInputEnvelopeSchema;
