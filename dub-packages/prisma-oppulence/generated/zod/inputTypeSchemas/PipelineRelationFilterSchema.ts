import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';

export const PipelineRelationFilterSchema: z.ZodType<Prisma.PipelineRelationFilter> = z.object({
  is: z.lazy(() => PipelineWhereInputSchema).optional(),
  isNot: z.lazy(() => PipelineWhereInputSchema).optional()
}).strict();

export default PipelineRelationFilterSchema;
