import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAccessRuleWhereInputSchema } from './PipelineAccessRuleWhereInputSchema';

export const PipelineAccessRuleRelationFilterSchema: z.ZodType<Prisma.PipelineAccessRuleRelationFilter> = z.object({
  is: z.lazy(() => PipelineAccessRuleWhereInputSchema).optional(),
  isNot: z.lazy(() => PipelineAccessRuleWhereInputSchema).optional()
}).strict();

export default PipelineAccessRuleRelationFilterSchema;
