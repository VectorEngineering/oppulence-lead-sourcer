import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationActionIncludeSchema } from '../inputTypeSchemas/AutomationActionIncludeSchema'
import { AutomationActionWhereInputSchema } from '../inputTypeSchemas/AutomationActionWhereInputSchema'
import { AutomationActionOrderByWithRelationInputSchema } from '../inputTypeSchemas/AutomationActionOrderByWithRelationInputSchema'
import { AutomationActionWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationActionWhereUniqueInputSchema'
import { AutomationActionScalarFieldEnumSchema } from '../inputTypeSchemas/AutomationActionScalarFieldEnumSchema'
import { PipelineAutomationArgsSchema } from "../outputTypeSchemas/PipelineAutomationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutomationActionSelectSchema: z.ZodType<Prisma.AutomationActionSelect> = z.object({
  id: z.boolean().optional(),
  automationId: z.boolean().optional(),
  field: z.boolean().optional(),
  value: z.boolean().optional(),
  template: z.boolean().optional(),
  automation: z.union([z.boolean(),z.lazy(() => PipelineAutomationArgsSchema)]).optional(),
}).strict()

export const AutomationActionFindManyArgsSchema: z.ZodType<Prisma.AutomationActionFindManyArgs> = z.object({
  select: AutomationActionSelectSchema.optional(),
  include: AutomationActionIncludeSchema.optional(),
  where: AutomationActionWhereInputSchema.optional(),
  orderBy: z.union([ AutomationActionOrderByWithRelationInputSchema.array(),AutomationActionOrderByWithRelationInputSchema ]).optional(),
  cursor: AutomationActionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AutomationActionScalarFieldEnumSchema,AutomationActionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AutomationActionFindManyArgsSchema;
