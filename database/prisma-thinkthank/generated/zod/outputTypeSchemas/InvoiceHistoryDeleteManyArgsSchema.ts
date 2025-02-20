import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceHistoryWhereInputSchema } from '../inputTypeSchemas/InvoiceHistoryWhereInputSchema'

export const InvoiceHistoryDeleteManyArgsSchema: z.ZodType<Prisma.InvoiceHistoryDeleteManyArgs> = z.object({
  where: InvoiceHistoryWhereInputSchema.optional(),
}).strict() ;

export default InvoiceHistoryDeleteManyArgsSchema;
