import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefaultDomainsCreateManyProjectInputSchema } from './DefaultDomainsCreateManyProjectInputSchema';

export const DefaultDomainsCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.DefaultDomainsCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DefaultDomainsCreateManyProjectInputSchema),z.lazy(() => DefaultDomainsCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DefaultDomainsCreateManyProjectInputEnvelopeSchema;
