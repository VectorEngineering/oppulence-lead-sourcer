import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportColumnWhereInputSchema } from '../inputTypeSchemas/ReportColumnWhereInputSchema'
import { ReportColumnOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReportColumnOrderByWithAggregationInputSchema'
import { ReportColumnScalarFieldEnumSchema } from '../inputTypeSchemas/ReportColumnScalarFieldEnumSchema'
import { ReportColumnScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReportColumnScalarWhereWithAggregatesInputSchema'

export const ReportColumnGroupByArgsSchema: z.ZodType<Prisma.ReportColumnGroupByArgs> = z.object({
  where: ReportColumnWhereInputSchema.optional(),
  orderBy: z.union([ ReportColumnOrderByWithAggregationInputSchema.array(),ReportColumnOrderByWithAggregationInputSchema ]).optional(),
  by: ReportColumnScalarFieldEnumSchema.array(),
  having: ReportColumnScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ReportColumnGroupByArgsSchema;
