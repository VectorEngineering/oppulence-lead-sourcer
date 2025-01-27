import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineKpiSelectSchema } from '../inputTypeSchemas/PipelineKpiSelectSchema';
import { PipelineKpiIncludeSchema } from '../inputTypeSchemas/PipelineKpiIncludeSchema';

export const PipelineKpiArgsSchema: z.ZodType<Prisma.PipelineKpiDefaultArgs> = z.object({
  select: z.lazy(() => PipelineKpiSelectSchema).optional(),
  include: z.lazy(() => PipelineKpiIncludeSchema).optional(),
}).strict();

export default PipelineKpiArgsSchema;
