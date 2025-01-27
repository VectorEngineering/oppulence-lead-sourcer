import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationActionWhereInputSchema } from '../inputTypeSchemas/AutomationActionWhereInputSchema'
import { AutomationActionOrderByWithRelationInputSchema } from '../inputTypeSchemas/AutomationActionOrderByWithRelationInputSchema'
import { AutomationActionWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationActionWhereUniqueInputSchema'

export const AutomationActionAggregateArgsSchema: z.ZodType<Prisma.AutomationActionAggregateArgs> = z.object({
  where: AutomationActionWhereInputSchema.optional(),
  orderBy: z.union([ AutomationActionOrderByWithRelationInputSchema.array(),AutomationActionOrderByWithRelationInputSchema ]).optional(),
  cursor: AutomationActionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AutomationActionAggregateArgsSchema;
