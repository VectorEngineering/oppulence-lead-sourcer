import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PayoutWhereInputSchema } from '../inputTypeSchemas/PayoutWhereInputSchema'
import { PayoutOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PayoutOrderByWithAggregationInputSchema'
import { PayoutScalarFieldEnumSchema } from '../inputTypeSchemas/PayoutScalarFieldEnumSchema'
import { PayoutScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PayoutScalarWhereWithAggregatesInputSchema'

export const PayoutGroupByArgsSchema: z.ZodType<Prisma.PayoutGroupByArgs> = z.object({
  where: PayoutWhereInputSchema.optional(),
  orderBy: z.union([ PayoutOrderByWithAggregationInputSchema.array(),PayoutOrderByWithAggregationInputSchema ]).optional(),
  by: PayoutScalarFieldEnumSchema.array(),
  having: PayoutScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PayoutGroupByArgsSchema;
