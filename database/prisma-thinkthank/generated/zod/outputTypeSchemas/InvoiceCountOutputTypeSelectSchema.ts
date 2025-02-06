import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const InvoiceCountOutputTypeSelectSchema: z.ZodType<Prisma.InvoiceCountOutputTypeSelect> = z.object({
  payouts: z.boolean().optional(),
  comments: z.boolean().optional(),
  attachments: z.boolean().optional(),
  history: z.boolean().optional(),
}).strict();

export default InvoiceCountOutputTypeSelectSchema;
