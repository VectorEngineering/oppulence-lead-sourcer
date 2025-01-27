import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationConditionWhereInputSchema } from '../inputTypeSchemas/AutomationConditionWhereInputSchema'

export const AutomationConditionDeleteManyArgsSchema: z.ZodType<Prisma.AutomationConditionDeleteManyArgs> = z.object({
  where: AutomationConditionWhereInputSchema.optional(),
}).strict() ;

export default AutomationConditionDeleteManyArgsSchema;
