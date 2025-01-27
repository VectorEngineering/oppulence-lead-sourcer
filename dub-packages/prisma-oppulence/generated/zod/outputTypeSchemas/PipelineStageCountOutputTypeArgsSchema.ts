import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineStageCountOutputTypeSelectSchema } from './PipelineStageCountOutputTypeSelectSchema';

export const PipelineStageCountOutputTypeArgsSchema: z.ZodType<Prisma.PipelineStageCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PipelineStageCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PipelineStageCountOutputTypeSelectSchema;
