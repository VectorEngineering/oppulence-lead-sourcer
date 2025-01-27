import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineAccessRuleArgsSchema } from "../outputTypeSchemas/PipelineAccessRuleArgsSchema"

export const AccessRuleConditionIncludeSchema: z.ZodType<Prisma.AccessRuleConditionInclude> = z.object({
  rule: z.union([z.boolean(),z.lazy(() => PipelineAccessRuleArgsSchema)]).optional(),
}).strict()

export default AccessRuleConditionIncludeSchema;
