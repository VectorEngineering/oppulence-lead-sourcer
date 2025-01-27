import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceHistoryWhereInputSchema } from '../inputTypeSchemas/InvoiceHistoryWhereInputSchema'
import { InvoiceHistoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InvoiceHistoryOrderByWithAggregationInputSchema'
import { InvoiceHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/InvoiceHistoryScalarFieldEnumSchema'
import { InvoiceHistoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InvoiceHistoryScalarWhereWithAggregatesInputSchema'

export const InvoiceHistoryGroupByArgsSchema: z.ZodType<Prisma.InvoiceHistoryGroupByArgs> = z.object({
  where: InvoiceHistoryWhereInputSchema.optional(),
  orderBy: z.union([ InvoiceHistoryOrderByWithAggregationInputSchema.array(),InvoiceHistoryOrderByWithAggregationInputSchema ]).optional(),
  by: InvoiceHistoryScalarFieldEnumSchema.array(),
  having: InvoiceHistoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InvoiceHistoryGroupByArgsSchema;
