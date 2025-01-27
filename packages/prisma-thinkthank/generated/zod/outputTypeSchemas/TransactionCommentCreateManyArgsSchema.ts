import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCommentCreateManyInputSchema } from '../inputTypeSchemas/TransactionCommentCreateManyInputSchema'

export const TransactionCommentCreateManyArgsSchema: z.ZodType<Prisma.TransactionCommentCreateManyArgs> = z.object({
  data: z.union([ TransactionCommentCreateManyInputSchema,TransactionCommentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TransactionCommentCreateManyArgsSchema;
