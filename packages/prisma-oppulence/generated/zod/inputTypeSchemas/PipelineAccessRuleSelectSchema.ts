import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccessRuleConditionFindManyArgsSchema } from "../outputTypeSchemas/AccessRuleConditionFindManyArgsSchema"
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"
import { PipelineAccessRuleCountOutputTypeArgsSchema } from "../outputTypeSchemas/PipelineAccessRuleCountOutputTypeArgsSchema"

export const PipelineAccessRuleSelectSchema: z.ZodType<Prisma.PipelineAccessRuleSelect> = z.object({
  id: z.boolean().optional(),
  pipelineId: z.boolean().optional(),
  roleId: z.boolean().optional(),
  userId: z.boolean().optional(),
  teamId: z.boolean().optional(),
  accessLevel: z.boolean().optional(),
  conditions: z.union([z.boolean(),z.lazy(() => AccessRuleConditionFindManyArgsSchema)]).optional(),
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PipelineAccessRuleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PipelineAccessRuleSelectSchema;
