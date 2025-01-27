import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealCompetitorWhereInputSchema } from '../inputTypeSchemas/DealCompetitorWhereInputSchema'
import { DealCompetitorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DealCompetitorOrderByWithAggregationInputSchema'
import { DealCompetitorScalarFieldEnumSchema } from '../inputTypeSchemas/DealCompetitorScalarFieldEnumSchema'
import { DealCompetitorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DealCompetitorScalarWhereWithAggregatesInputSchema'

export const DealCompetitorGroupByArgsSchema: z.ZodType<Prisma.DealCompetitorGroupByArgs> = z.object({
  where: DealCompetitorWhereInputSchema.optional(),
  orderBy: z.union([ DealCompetitorOrderByWithAggregationInputSchema.array(),DealCompetitorOrderByWithAggregationInputSchema ]).optional(),
  by: DealCompetitorScalarFieldEnumSchema.array(),
  having: DealCompetitorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DealCompetitorGroupByArgsSchema;
