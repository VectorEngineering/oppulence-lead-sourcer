import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineAccessRuleSelectSchema } from '../inputTypeSchemas/PipelineAccessRuleSelectSchema';
import { PipelineAccessRuleIncludeSchema } from '../inputTypeSchemas/PipelineAccessRuleIncludeSchema';

export const PipelineAccessRuleArgsSchema: z.ZodType<Prisma.PipelineAccessRuleDefaultArgs> = z.object({
  select: z.lazy(() => PipelineAccessRuleSelectSchema).optional(),
  include: z.lazy(() => PipelineAccessRuleIncludeSchema).optional(),
}).strict();

export default PipelineAccessRuleArgsSchema;
