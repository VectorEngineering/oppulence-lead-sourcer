import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema';

export const PipelineAutomationListRelationFilterSchema: z.ZodType<Prisma.PipelineAutomationListRelationFilter> = z.object({
  every: z.lazy(() => PipelineAutomationWhereInputSchema).optional(),
  some: z.lazy(() => PipelineAutomationWhereInputSchema).optional(),
  none: z.lazy(() => PipelineAutomationWhereInputSchema).optional()
}).strict();

export default PipelineAutomationListRelationFilterSchema;
