import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateManyProjectInputSchema } from './CustomerCreateManyProjectInputSchema';

export const CustomerCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.CustomerCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CustomerCreateManyProjectInputSchema),z.lazy(() => CustomerCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CustomerCreateManyProjectInputEnvelopeSchema;
