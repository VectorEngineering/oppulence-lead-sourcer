import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceArgsSchema } from "../outputTypeSchemas/InvoiceArgsSchema"

export const InvoiceHistoryIncludeSchema: z.ZodType<Prisma.InvoiceHistoryInclude> = z.object({
  invoice: z.union([z.boolean(),z.lazy(() => InvoiceArgsSchema)]).optional(),
}).strict()

export default InvoiceHistoryIncludeSchema;
