import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineStageWhereInputSchema } from '../inputTypeSchemas/PipelineStageWhereInputSchema'

export const PipelineStageDeleteManyArgsSchema: z.ZodType<Prisma.PipelineStageDeleteManyArgs> = z.object({
  where: PipelineStageWhereInputSchema.optional(),
}).strict() ;

export default PipelineStageDeleteManyArgsSchema;
