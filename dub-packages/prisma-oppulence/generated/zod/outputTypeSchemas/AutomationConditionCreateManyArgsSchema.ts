import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationConditionCreateManyInputSchema } from '../inputTypeSchemas/AutomationConditionCreateManyInputSchema'

export const AutomationConditionCreateManyArgsSchema: z.ZodType<Prisma.AutomationConditionCreateManyArgs> = z.object({
  data: z.union([ AutomationConditionCreateManyInputSchema,AutomationConditionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AutomationConditionCreateManyArgsSchema;
