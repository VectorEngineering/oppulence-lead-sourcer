import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { YearInReviewWhereInputSchema } from '../inputTypeSchemas/YearInReviewWhereInputSchema'
import { YearInReviewOrderByWithAggregationInputSchema } from '../inputTypeSchemas/YearInReviewOrderByWithAggregationInputSchema'
import { YearInReviewScalarFieldEnumSchema } from '../inputTypeSchemas/YearInReviewScalarFieldEnumSchema'
import { YearInReviewScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/YearInReviewScalarWhereWithAggregatesInputSchema'

export const YearInReviewGroupByArgsSchema: z.ZodType<Prisma.YearInReviewGroupByArgs> = z.object({
  where: YearInReviewWhereInputSchema.optional(),
  orderBy: z.union([ YearInReviewOrderByWithAggregationInputSchema.array(),YearInReviewOrderByWithAggregationInputSchema ]).optional(),
  by: YearInReviewScalarFieldEnumSchema.array(),
  having: YearInReviewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default YearInReviewGroupByArgsSchema;
