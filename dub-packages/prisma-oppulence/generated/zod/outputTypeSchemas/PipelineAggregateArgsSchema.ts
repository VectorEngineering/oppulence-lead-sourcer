import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineWhereInputSchema } from '../inputTypeSchemas/PipelineWhereInputSchema'
import { PipelineOrderByWithRelationInputSchema } from '../inputTypeSchemas/PipelineOrderByWithRelationInputSchema'
import { PipelineWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineWhereUniqueInputSchema'

export const PipelineAggregateArgsSchema: z.ZodType<Prisma.PipelineAggregateArgs> = z.object({
  where: PipelineWhereInputSchema.optional(),
  orderBy: z.union([ PipelineOrderByWithRelationInputSchema.array(),PipelineOrderByWithRelationInputSchema ]).optional(),
  cursor: PipelineWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PipelineAggregateArgsSchema;
