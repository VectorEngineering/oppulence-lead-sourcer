import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateManyProjectInputSchema } from './TransactionCreateManyProjectInputSchema';

export const TransactionCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.TransactionCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TransactionCreateManyProjectInputSchema),z.lazy(() => TransactionCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TransactionCreateManyProjectInputEnvelopeSchema;
