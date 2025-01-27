import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportSortingWhereInputSchema } from '../inputTypeSchemas/ReportSortingWhereInputSchema'
import { ReportSortingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReportSortingOrderByWithAggregationInputSchema'
import { ReportSortingScalarFieldEnumSchema } from '../inputTypeSchemas/ReportSortingScalarFieldEnumSchema'
import { ReportSortingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReportSortingScalarWhereWithAggregatesInputSchema'

export const ReportSortingGroupByArgsSchema: z.ZodType<Prisma.ReportSortingGroupByArgs> = z.object({
  where: ReportSortingWhereInputSchema.optional(),
  orderBy: z.union([ ReportSortingOrderByWithAggregationInputSchema.array(),ReportSortingOrderByWithAggregationInputSchema ]).optional(),
  by: ReportSortingScalarFieldEnumSchema.array(),
  having: ReportSortingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ReportSortingGroupByArgsSchema;
