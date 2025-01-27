import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema';

export const PipelineAutomationRelationFilterSchema: z.ZodType<Prisma.PipelineAutomationRelationFilter> = z.object({
  is: z.lazy(() => PipelineAutomationWhereInputSchema).optional(),
  isNot: z.lazy(() => PipelineAutomationWhereInputSchema).optional()
}).strict();

export default PipelineAutomationRelationFilterSchema;
