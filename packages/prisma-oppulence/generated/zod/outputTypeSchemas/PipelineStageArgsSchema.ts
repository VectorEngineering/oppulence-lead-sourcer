import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineStageSelectSchema } from '../inputTypeSchemas/PipelineStageSelectSchema';
import { PipelineStageIncludeSchema } from '../inputTypeSchemas/PipelineStageIncludeSchema';

export const PipelineStageArgsSchema: z.ZodType<Prisma.PipelineStageDefaultArgs> = z.object({
  select: z.lazy(() => PipelineStageSelectSchema).optional(),
  include: z.lazy(() => PipelineStageIncludeSchema).optional(),
}).strict();

export default PipelineStageArgsSchema;
