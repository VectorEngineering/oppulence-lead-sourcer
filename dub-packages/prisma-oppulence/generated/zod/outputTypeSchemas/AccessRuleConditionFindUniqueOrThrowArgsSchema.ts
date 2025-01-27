import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccessRuleConditionIncludeSchema } from '../inputTypeSchemas/AccessRuleConditionIncludeSchema'
import { AccessRuleConditionWhereUniqueInputSchema } from '../inputTypeSchemas/AccessRuleConditionWhereUniqueInputSchema'
import { PipelineAccessRuleArgsSchema } from "../outputTypeSchemas/PipelineAccessRuleArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccessRuleConditionSelectSchema: z.ZodType<Prisma.AccessRuleConditionSelect> = z.object({
  id: z.boolean().optional(),
  ruleId: z.boolean().optional(),
  field: z.boolean().optional(),
  operator: z.boolean().optional(),
  value: z.boolean().optional(),
  rule: z.union([z.boolean(),z.lazy(() => PipelineAccessRuleArgsSchema)]).optional(),
}).strict()

export const AccessRuleConditionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccessRuleConditionFindUniqueOrThrowArgs> = z.object({
  select: AccessRuleConditionSelectSchema.optional(),
  include: AccessRuleConditionIncludeSchema.optional(),
  where: AccessRuleConditionWhereUniqueInputSchema,
}).strict() ;

export default AccessRuleConditionFindUniqueOrThrowArgsSchema;
