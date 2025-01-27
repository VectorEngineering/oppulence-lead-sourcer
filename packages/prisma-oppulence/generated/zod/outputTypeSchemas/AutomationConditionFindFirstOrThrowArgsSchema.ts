import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationConditionIncludeSchema } from '../inputTypeSchemas/AutomationConditionIncludeSchema'
import { AutomationConditionWhereInputSchema } from '../inputTypeSchemas/AutomationConditionWhereInputSchema'
import { AutomationConditionOrderByWithRelationInputSchema } from '../inputTypeSchemas/AutomationConditionOrderByWithRelationInputSchema'
import { AutomationConditionWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationConditionWhereUniqueInputSchema'
import { AutomationConditionScalarFieldEnumSchema } from '../inputTypeSchemas/AutomationConditionScalarFieldEnumSchema'
import { PipelineAutomationArgsSchema } from "../outputTypeSchemas/PipelineAutomationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutomationConditionSelectSchema: z.ZodType<Prisma.AutomationConditionSelect> = z.object({
  id: z.boolean().optional(),
  automationId: z.boolean().optional(),
  field: z.boolean().optional(),
  operator: z.boolean().optional(),
  value: z.boolean().optional(),
  automation: z.union([z.boolean(),z.lazy(() => PipelineAutomationArgsSchema)]).optional(),
}).strict()

export const AutomationConditionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AutomationConditionFindFirstOrThrowArgs> = z.object({
  select: AutomationConditionSelectSchema.optional(),
  include: AutomationConditionIncludeSchema.optional(),
  where: AutomationConditionWhereInputSchema.optional(),
  orderBy: z.union([ AutomationConditionOrderByWithRelationInputSchema.array(),AutomationConditionOrderByWithRelationInputSchema ]).optional(),
  cursor: AutomationConditionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AutomationConditionScalarFieldEnumSchema,AutomationConditionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AutomationConditionFindFirstOrThrowArgsSchema;
