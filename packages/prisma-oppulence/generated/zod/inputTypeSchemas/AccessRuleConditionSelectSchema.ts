import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineAccessRuleArgsSchema } from "../outputTypeSchemas/PipelineAccessRuleArgsSchema"

export const AccessRuleConditionSelectSchema: z.ZodType<Prisma.AccessRuleConditionSelect> = z.object({
  id: z.boolean().optional(),
  ruleId: z.boolean().optional(),
  field: z.boolean().optional(),
  operator: z.boolean().optional(),
  value: z.boolean().optional(),
  rule: z.union([z.boolean(),z.lazy(() => PipelineAccessRuleArgsSchema)]).optional(),
}).strict()

export default AccessRuleConditionSelectSchema;
