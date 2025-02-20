import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountCreateManyProjectInputSchema } from './BankAccountCreateManyProjectInputSchema';

export const BankAccountCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.BankAccountCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BankAccountCreateManyProjectInputSchema),z.lazy(() => BankAccountCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BankAccountCreateManyProjectInputEnvelopeSchema;
