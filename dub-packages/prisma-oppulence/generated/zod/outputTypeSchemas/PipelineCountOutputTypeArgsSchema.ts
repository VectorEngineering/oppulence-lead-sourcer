import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineCountOutputTypeSelectSchema } from './PipelineCountOutputTypeSelectSchema';

export const PipelineCountOutputTypeArgsSchema: z.ZodType<Prisma.PipelineCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PipelineCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PipelineCountOutputTypeSelectSchema;
