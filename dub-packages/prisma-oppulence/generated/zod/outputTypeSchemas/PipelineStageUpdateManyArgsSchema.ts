import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineStageUpdateManyMutationInputSchema } from '../inputTypeSchemas/PipelineStageUpdateManyMutationInputSchema'
import { PipelineStageUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PipelineStageUncheckedUpdateManyInputSchema'
import { PipelineStageWhereInputSchema } from '../inputTypeSchemas/PipelineStageWhereInputSchema'

export const PipelineStageUpdateManyArgsSchema: z.ZodType<Prisma.PipelineStageUpdateManyArgs> = z.object({
  data: z.union([ PipelineStageUpdateManyMutationInputSchema,PipelineStageUncheckedUpdateManyInputSchema ]),
  where: PipelineStageWhereInputSchema.optional(),
}).strict() ;

export default PipelineStageUpdateManyArgsSchema;
