import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCommentWhereInputSchema } from '../inputTypeSchemas/TransactionCommentWhereInputSchema'

export const TransactionCommentDeleteManyArgsSchema: z.ZodType<Prisma.TransactionCommentDeleteManyArgs> = z.object({
  where: TransactionCommentWhereInputSchema.optional(),
}).strict() ;

export default TransactionCommentDeleteManyArgsSchema;
