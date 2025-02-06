import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateManyProjectInputSchema } from './LinkCreateManyProjectInputSchema';

export const LinkCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.LinkCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LinkCreateManyProjectInputSchema),z.lazy(() => LinkCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LinkCreateManyProjectInputEnvelopeSchema;
