import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationActionWhereInputSchema } from '../inputTypeSchemas/AutomationActionWhereInputSchema'
import { AutomationActionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AutomationActionOrderByWithAggregationInputSchema'
import { AutomationActionScalarFieldEnumSchema } from '../inputTypeSchemas/AutomationActionScalarFieldEnumSchema'
import { AutomationActionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AutomationActionScalarWhereWithAggregatesInputSchema'

export const AutomationActionGroupByArgsSchema: z.ZodType<Prisma.AutomationActionGroupByArgs> = z.object({
  where: AutomationActionWhereInputSchema.optional(),
  orderBy: z.union([ AutomationActionOrderByWithAggregationInputSchema.array(),AutomationActionOrderByWithAggregationInputSchema ]).optional(),
  by: AutomationActionScalarFieldEnumSchema.array(),
  having: AutomationActionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AutomationActionGroupByArgsSchema;
