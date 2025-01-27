import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineCreateManyInputSchema } from '../inputTypeSchemas/PipelineCreateManyInputSchema'

export const PipelineCreateManyArgsSchema: z.ZodType<Prisma.PipelineCreateManyArgs> = z.object({
  data: z.union([ PipelineCreateManyInputSchema,PipelineCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PipelineCreateManyArgsSchema;
