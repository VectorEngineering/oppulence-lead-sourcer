import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineStageWhereInputSchema } from '../inputTypeSchemas/PipelineStageWhereInputSchema'
import { PipelineStageOrderByWithRelationInputSchema } from '../inputTypeSchemas/PipelineStageOrderByWithRelationInputSchema'
import { PipelineStageWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineStageWhereUniqueInputSchema'

export const PipelineStageAggregateArgsSchema: z.ZodType<Prisma.PipelineStageAggregateArgs> = z.object({
  where: PipelineStageWhereInputSchema.optional(),
  orderBy: z.union([ PipelineStageOrderByWithRelationInputSchema.array(),PipelineStageOrderByWithRelationInputSchema ]).optional(),
  cursor: PipelineStageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PipelineStageAggregateArgsSchema;
