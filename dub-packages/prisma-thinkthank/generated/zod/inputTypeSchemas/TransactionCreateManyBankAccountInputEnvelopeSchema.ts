import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateManyBankAccountInputSchema } from './TransactionCreateManyBankAccountInputSchema';

export const TransactionCreateManyBankAccountInputEnvelopeSchema: z.ZodType<Prisma.TransactionCreateManyBankAccountInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TransactionCreateManyBankAccountInputSchema),z.lazy(() => TransactionCreateManyBankAccountInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TransactionCreateManyBankAccountInputEnvelopeSchema;
