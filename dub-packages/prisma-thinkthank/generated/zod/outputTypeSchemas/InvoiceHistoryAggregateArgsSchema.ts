import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceHistoryWhereInputSchema } from '../inputTypeSchemas/InvoiceHistoryWhereInputSchema'
import { InvoiceHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvoiceHistoryOrderByWithRelationInputSchema'
import { InvoiceHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceHistoryWhereUniqueInputSchema'

export const InvoiceHistoryAggregateArgsSchema: z.ZodType<Prisma.InvoiceHistoryAggregateArgs> = z.object({
  where: InvoiceHistoryWhereInputSchema.optional(),
  orderBy: z.union([ InvoiceHistoryOrderByWithRelationInputSchema.array(),InvoiceHistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InvoiceHistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InvoiceHistoryAggregateArgsSchema;
