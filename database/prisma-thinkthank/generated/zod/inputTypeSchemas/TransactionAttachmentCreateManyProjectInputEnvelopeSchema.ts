import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentCreateManyProjectInputSchema } from './TransactionAttachmentCreateManyProjectInputSchema';

export const TransactionAttachmentCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.TransactionAttachmentCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TransactionAttachmentCreateManyProjectInputSchema),z.lazy(() => TransactionAttachmentCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TransactionAttachmentCreateManyProjectInputEnvelopeSchema;
