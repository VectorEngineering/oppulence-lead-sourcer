import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineWhereInputSchema } from '../inputTypeSchemas/PipelineWhereInputSchema'
import { PipelineOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PipelineOrderByWithAggregationInputSchema'
import { PipelineScalarFieldEnumSchema } from '../inputTypeSchemas/PipelineScalarFieldEnumSchema'
import { PipelineScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PipelineScalarWhereWithAggregatesInputSchema'

export const PipelineGroupByArgsSchema: z.ZodType<Prisma.PipelineGroupByArgs> = z.object({
  where: PipelineWhereInputSchema.optional(),
  orderBy: z.union([ PipelineOrderByWithAggregationInputSchema.array(),PipelineOrderByWithAggregationInputSchema ]).optional(),
  by: PipelineScalarFieldEnumSchema.array(),
  having: PipelineScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PipelineGroupByArgsSchema;
