import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionAttachmentWhereInputSchema } from '../inputTypeSchemas/TransactionAttachmentWhereInputSchema'
import { TransactionAttachmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/TransactionAttachmentOrderByWithRelationInputSchema'
import { TransactionAttachmentWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionAttachmentWhereUniqueInputSchema'

export const TransactionAttachmentAggregateArgsSchema: z.ZodType<Prisma.TransactionAttachmentAggregateArgs> = z.object({
  where: TransactionAttachmentWhereInputSchema.optional(),
  orderBy: z.union([ TransactionAttachmentOrderByWithRelationInputSchema.array(),TransactionAttachmentOrderByWithRelationInputSchema ]).optional(),
  cursor: TransactionAttachmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TransactionAttachmentAggregateArgsSchema;
