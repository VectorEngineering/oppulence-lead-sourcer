import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceArgsSchema } from "../outputTypeSchemas/InvoiceArgsSchema"

export const InvoiceHistorySelectSchema: z.ZodType<Prisma.InvoiceHistorySelect> = z.object({
  id: z.boolean().optional(),
  invoiceId: z.boolean().optional(),
  action: z.boolean().optional(),
  description: z.boolean().optional(),
  changes: z.boolean().optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  invoice: z.union([z.boolean(),z.lazy(() => InvoiceArgsSchema)]).optional(),
}).strict()

export default InvoiceHistorySelectSchema;
