import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateManyLinkInputSchema } from './CustomerCreateManyLinkInputSchema';

export const CustomerCreateManyLinkInputEnvelopeSchema: z.ZodType<Prisma.CustomerCreateManyLinkInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CustomerCreateManyLinkInputSchema),z.lazy(() => CustomerCreateManyLinkInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CustomerCreateManyLinkInputEnvelopeSchema;
