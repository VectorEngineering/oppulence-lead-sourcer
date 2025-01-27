import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccessRuleConditionWhereInputSchema } from '../inputTypeSchemas/AccessRuleConditionWhereInputSchema'
import { AccessRuleConditionOrderByWithRelationInputSchema } from '../inputTypeSchemas/AccessRuleConditionOrderByWithRelationInputSchema'
import { AccessRuleConditionWhereUniqueInputSchema } from '../inputTypeSchemas/AccessRuleConditionWhereUniqueInputSchema'

export const AccessRuleConditionAggregateArgsSchema: z.ZodType<Prisma.AccessRuleConditionAggregateArgs> = z.object({
  where: AccessRuleConditionWhereInputSchema.optional(),
  orderBy: z.union([ AccessRuleConditionOrderByWithRelationInputSchema.array(),AccessRuleConditionOrderByWithRelationInputSchema ]).optional(),
  cursor: AccessRuleConditionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AccessRuleConditionAggregateArgsSchema;
