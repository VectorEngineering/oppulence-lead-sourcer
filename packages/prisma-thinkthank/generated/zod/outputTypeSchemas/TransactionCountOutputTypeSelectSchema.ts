import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TransactionCountOutputTypeSelectSchema: z.ZodType<Prisma.TransactionCountOutputTypeSelect> = z.object({
  attachments: z.boolean().optional(),
  tags: z.boolean().optional(),
  comments: z.boolean().optional(),
  history: z.boolean().optional(),
  reconciliationMatches: z.boolean().optional(),
  Inbox: z.boolean().optional(),
}).strict();

export default TransactionCountOutputTypeSelectSchema;
