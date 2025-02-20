import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereInputSchema } from '../inputTypeSchemas/SaleWhereInputSchema'
import { SaleOrderByWithRelationInputSchema } from '../inputTypeSchemas/SaleOrderByWithRelationInputSchema'
import { SaleWhereUniqueInputSchema } from '../inputTypeSchemas/SaleWhereUniqueInputSchema'

export const SaleAggregateArgsSchema: z.ZodType<Prisma.SaleAggregateArgs> = z.object({
  where: SaleWhereInputSchema.optional(),
  orderBy: z.union([ SaleOrderByWithRelationInputSchema.array(),SaleOrderByWithRelationInputSchema ]).optional(),
  cursor: SaleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SaleAggregateArgsSchema;
