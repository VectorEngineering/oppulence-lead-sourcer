import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';

export const PipelineListRelationFilterSchema: z.ZodType<Prisma.PipelineListRelationFilter> = z.object({
  every: z.lazy(() => PipelineWhereInputSchema).optional(),
  some: z.lazy(() => PipelineWhereInputSchema).optional(),
  none: z.lazy(() => PipelineWhereInputSchema).optional()
}).strict();

export default PipelineListRelationFilterSchema;
