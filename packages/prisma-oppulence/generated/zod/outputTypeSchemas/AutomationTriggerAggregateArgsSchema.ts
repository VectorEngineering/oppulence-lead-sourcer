import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationTriggerWhereInputSchema } from '../inputTypeSchemas/AutomationTriggerWhereInputSchema'
import { AutomationTriggerOrderByWithRelationInputSchema } from '../inputTypeSchemas/AutomationTriggerOrderByWithRelationInputSchema'
import { AutomationTriggerWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationTriggerWhereUniqueInputSchema'

export const AutomationTriggerAggregateArgsSchema: z.ZodType<Prisma.AutomationTriggerAggregateArgs> = z.object({
  where: AutomationTriggerWhereInputSchema.optional(),
  orderBy: z.union([ AutomationTriggerOrderByWithRelationInputSchema.array(),AutomationTriggerOrderByWithRelationInputSchema ]).optional(),
  cursor: AutomationTriggerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AutomationTriggerAggregateArgsSchema;
