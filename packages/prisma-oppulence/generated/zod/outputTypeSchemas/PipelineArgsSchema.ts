import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineSelectSchema } from '../inputTypeSchemas/PipelineSelectSchema';
import { PipelineIncludeSchema } from '../inputTypeSchemas/PipelineIncludeSchema';

export const PipelineArgsSchema: z.ZodType<Prisma.PipelineDefaultArgs> = z.object({
  select: z.lazy(() => PipelineSelectSchema).optional(),
  include: z.lazy(() => PipelineIncludeSchema).optional(),
}).strict();

export default PipelineArgsSchema;
