import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/TransactionCategoryUpdateManyMutationInputSchema'
import { TransactionCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TransactionCategoryUncheckedUpdateManyInputSchema'
import { TransactionCategoryWhereInputSchema } from '../inputTypeSchemas/TransactionCategoryWhereInputSchema'

export const TransactionCategoryUpdateManyArgsSchema: z.ZodType<Prisma.TransactionCategoryUpdateManyArgs> = z.object({
  data: z.union([ TransactionCategoryUpdateManyMutationInputSchema,TransactionCategoryUncheckedUpdateManyInputSchema ]),
  where: TransactionCategoryWhereInputSchema.optional(),
}).strict() ;

export default TransactionCategoryUpdateManyArgsSchema;
