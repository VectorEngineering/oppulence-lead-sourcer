import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationTriggerWhereInputSchema } from '../inputTypeSchemas/AutomationTriggerWhereInputSchema'
import { AutomationTriggerOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AutomationTriggerOrderByWithAggregationInputSchema'
import { AutomationTriggerScalarFieldEnumSchema } from '../inputTypeSchemas/AutomationTriggerScalarFieldEnumSchema'
import { AutomationTriggerScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AutomationTriggerScalarWhereWithAggregatesInputSchema'

export const AutomationTriggerGroupByArgsSchema: z.ZodType<Prisma.AutomationTriggerGroupByArgs> = z.object({
  where: AutomationTriggerWhereInputSchema.optional(),
  orderBy: z.union([ AutomationTriggerOrderByWithAggregationInputSchema.array(),AutomationTriggerOrderByWithAggregationInputSchema ]).optional(),
  by: AutomationTriggerScalarFieldEnumSchema.array(),
  having: AutomationTriggerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AutomationTriggerGroupByArgsSchema;
