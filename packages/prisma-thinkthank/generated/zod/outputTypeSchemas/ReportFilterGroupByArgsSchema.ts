import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportFilterWhereInputSchema } from '../inputTypeSchemas/ReportFilterWhereInputSchema'
import { ReportFilterOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReportFilterOrderByWithAggregationInputSchema'
import { ReportFilterScalarFieldEnumSchema } from '../inputTypeSchemas/ReportFilterScalarFieldEnumSchema'
import { ReportFilterScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReportFilterScalarWhereWithAggregatesInputSchema'

export const ReportFilterGroupByArgsSchema: z.ZodType<Prisma.ReportFilterGroupByArgs> = z.object({
  where: ReportFilterWhereInputSchema.optional(),
  orderBy: z.union([ ReportFilterOrderByWithAggregationInputSchema.array(),ReportFilterOrderByWithAggregationInputSchema ]).optional(),
  by: ReportFilterScalarFieldEnumSchema.array(),
  having: ReportFilterScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ReportFilterGroupByArgsSchema;
