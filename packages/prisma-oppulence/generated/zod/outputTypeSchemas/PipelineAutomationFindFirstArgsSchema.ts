import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineAutomationIncludeSchema } from '../inputTypeSchemas/PipelineAutomationIncludeSchema'
import { PipelineAutomationWhereInputSchema } from '../inputTypeSchemas/PipelineAutomationWhereInputSchema'
import { PipelineAutomationOrderByWithRelationInputSchema } from '../inputTypeSchemas/PipelineAutomationOrderByWithRelationInputSchema'
import { PipelineAutomationWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineAutomationWhereUniqueInputSchema'
import { PipelineAutomationScalarFieldEnumSchema } from '../inputTypeSchemas/PipelineAutomationScalarFieldEnumSchema'
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"
import { AutomationTriggerFindManyArgsSchema } from "../outputTypeSchemas/AutomationTriggerFindManyArgsSchema"
import { AutomationActionFindManyArgsSchema } from "../outputTypeSchemas/AutomationActionFindManyArgsSchema"
import { AutomationConditionFindManyArgsSchema } from "../outputTypeSchemas/AutomationConditionFindManyArgsSchema"
import { PipelineAutomationCountOutputTypeArgsSchema } from "../outputTypeSchemas/PipelineAutomationCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PipelineAutomationSelectSchema: z.ZodType<Prisma.PipelineAutomationSelect> = z.object({
  id: z.boolean().optional(),
  pipelineId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  isActive: z.boolean().optional(),
  triggerType: z.boolean().optional(),
  actionType: z.boolean().optional(),
  priority: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lastTriggered: z.boolean().optional(),
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
  triggers: z.union([z.boolean(),z.lazy(() => AutomationTriggerFindManyArgsSchema)]).optional(),
  actions: z.union([z.boolean(),z.lazy(() => AutomationActionFindManyArgsSchema)]).optional(),
  conditions: z.union([z.boolean(),z.lazy(() => AutomationConditionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PipelineAutomationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PipelineAutomationFindFirstArgsSchema: z.ZodType<Prisma.PipelineAutomationFindFirstArgs> = z.object({
  select: PipelineAutomationSelectSchema.optional(),
  include: PipelineAutomationIncludeSchema.optional(),
  where: PipelineAutomationWhereInputSchema.optional(),
  orderBy: z.union([ PipelineAutomationOrderByWithRelationInputSchema.array(),PipelineAutomationOrderByWithRelationInputSchema ]).optional(),
  cursor: PipelineAutomationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PipelineAutomationScalarFieldEnumSchema,PipelineAutomationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PipelineAutomationFindFirstArgsSchema;
