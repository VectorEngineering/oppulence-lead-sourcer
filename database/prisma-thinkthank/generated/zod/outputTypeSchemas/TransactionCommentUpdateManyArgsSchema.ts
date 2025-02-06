import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCommentUpdateManyMutationInputSchema } from '../inputTypeSchemas/TransactionCommentUpdateManyMutationInputSchema'
import { TransactionCommentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TransactionCommentUncheckedUpdateManyInputSchema'
import { TransactionCommentWhereInputSchema } from '../inputTypeSchemas/TransactionCommentWhereInputSchema'

export const TransactionCommentUpdateManyArgsSchema: z.ZodType<Prisma.TransactionCommentUpdateManyArgs> = z.object({
  data: z.union([ TransactionCommentUpdateManyMutationInputSchema,TransactionCommentUncheckedUpdateManyInputSchema ]),
  where: TransactionCommentWhereInputSchema.optional(),
}).strict() ;

export default TransactionCommentUpdateManyArgsSchema;
