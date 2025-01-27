import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PipelineAccessRuleCountOutputTypeSelectSchema: z.ZodType<Prisma.PipelineAccessRuleCountOutputTypeSelect> = z.object({
  conditions: z.boolean().optional(),
}).strict();

export default PipelineAccessRuleCountOutputTypeSelectSchema;
