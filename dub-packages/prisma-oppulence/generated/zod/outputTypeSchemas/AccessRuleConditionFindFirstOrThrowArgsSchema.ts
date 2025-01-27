import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccessRuleConditionIncludeSchema } from '../inputTypeSchemas/AccessRuleConditionIncludeSchema'
import { AccessRuleConditionWhereInputSchema } from '../inputTypeSchemas/AccessRuleConditionWhereInputSchema'
import { AccessRuleConditionOrderByWithRelationInputSchema } from '../inputTypeSchemas/AccessRuleConditionOrderByWithRelationInputSchema'
import { AccessRuleConditionWhereUniqueInputSchema } from '../inputTypeSchemas/AccessRuleConditionWhereUniqueInputSchema'
import { AccessRuleConditionScalarFieldEnumSchema } from '../inputTypeSchemas/AccessRuleConditionScalarFieldEnumSchema'
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

export const AccessRuleConditionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccessRuleConditionFindFirstOrThrowArgs> = z.object({
  select: AccessRuleConditionSelectSchema.optional(),
  include: AccessRuleConditionIncludeSchema.optional(),
  where: AccessRuleConditionWhereInputSchema.optional(),
  orderBy: z.union([ AccessRuleConditionOrderByWithRelationInputSchema.array(),AccessRuleConditionOrderByWithRelationInputSchema ]).optional(),
  cursor: AccessRuleConditionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccessRuleConditionScalarFieldEnumSchema,AccessRuleConditionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AccessRuleConditionFindFirstOrThrowArgsSchema;
