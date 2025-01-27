import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineKpiWhereInputSchema } from '../inputTypeSchemas/PipelineKpiWhereInputSchema'
import { PipelineKpiOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PipelineKpiOrderByWithAggregationInputSchema'
import { PipelineKpiScalarFieldEnumSchema } from '../inputTypeSchemas/PipelineKpiScalarFieldEnumSchema'
import { PipelineKpiScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PipelineKpiScalarWhereWithAggregatesInputSchema'

export const PipelineKpiGroupByArgsSchema: z.ZodType<Prisma.PipelineKpiGroupByArgs> = z.object({
  where: PipelineKpiWhereInputSchema.optional(),
  orderBy: z.union([ PipelineKpiOrderByWithAggregationInputSchema.array(),PipelineKpiOrderByWithAggregationInputSchema ]).optional(),
  by: PipelineKpiScalarFieldEnumSchema.array(),
  having: PipelineKpiScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PipelineKpiGroupByArgsSchema;
