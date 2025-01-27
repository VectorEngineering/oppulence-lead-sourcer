import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCategoryCreateManyInputSchema } from '../inputTypeSchemas/TransactionCategoryCreateManyInputSchema'

export const TransactionCategoryCreateManyArgsSchema: z.ZodType<Prisma.TransactionCategoryCreateManyArgs> = z.object({
  data: z.union([ TransactionCategoryCreateManyInputSchema,TransactionCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TransactionCategoryCreateManyArgsSchema;
