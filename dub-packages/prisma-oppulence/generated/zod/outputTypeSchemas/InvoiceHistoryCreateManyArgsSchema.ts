import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceHistoryCreateManyInputSchema } from '../inputTypeSchemas/InvoiceHistoryCreateManyInputSchema'

export const InvoiceHistoryCreateManyArgsSchema: z.ZodType<Prisma.InvoiceHistoryCreateManyArgs> = z.object({
  data: z.union([ InvoiceHistoryCreateManyInputSchema,InvoiceHistoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default InvoiceHistoryCreateManyArgsSchema;
