import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TransactionAttachmentCountOutputTypeSelectSchema: z.ZodType<Prisma.TransactionAttachmentCountOutputTypeSelect> = z.object({
  inbox: z.boolean().optional(),
}).strict();

export default TransactionAttachmentCountOutputTypeSelectSchema;
