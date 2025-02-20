import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCommentWhereInputSchema } from '../inputTypeSchemas/InvoiceCommentWhereInputSchema'
import { InvoiceCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvoiceCommentOrderByWithRelationInputSchema'
import { InvoiceCommentWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceCommentWhereUniqueInputSchema'

export const InvoiceCommentAggregateArgsSchema: z.ZodType<Prisma.InvoiceCommentAggregateArgs> = z.object({
  where: InvoiceCommentWhereInputSchema.optional(),
  orderBy: z.union([ InvoiceCommentOrderByWithRelationInputSchema.array(),InvoiceCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: InvoiceCommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InvoiceCommentAggregateArgsSchema;
