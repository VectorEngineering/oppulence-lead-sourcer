import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentCreateManyTransactionInputSchema } from './TransactionAttachmentCreateManyTransactionInputSchema';

export const TransactionAttachmentCreateManyTransactionInputEnvelopeSchema: z.ZodType<Prisma.TransactionAttachmentCreateManyTransactionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TransactionAttachmentCreateManyTransactionInputSchema),z.lazy(() => TransactionAttachmentCreateManyTransactionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TransactionAttachmentCreateManyTransactionInputEnvelopeSchema;
