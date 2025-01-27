import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationTriggerCreateManyInputSchema } from '../inputTypeSchemas/AutomationTriggerCreateManyInputSchema'

export const AutomationTriggerCreateManyArgsSchema: z.ZodType<Prisma.AutomationTriggerCreateManyArgs> = z.object({
  data: z.union([ AutomationTriggerCreateManyInputSchema,AutomationTriggerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AutomationTriggerCreateManyArgsSchema;
