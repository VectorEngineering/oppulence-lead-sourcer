import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const InvoiceCommentCountOutputTypeSelectSchema: z.ZodType<Prisma.InvoiceCommentCountOutputTypeSelect> = z.object({
  replies: z.boolean().optional(),
}).strict();

export default InvoiceCommentCountOutputTypeSelectSchema;
