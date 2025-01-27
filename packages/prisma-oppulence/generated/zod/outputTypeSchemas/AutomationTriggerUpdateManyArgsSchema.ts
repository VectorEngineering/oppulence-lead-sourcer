import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationTriggerUpdateManyMutationInputSchema } from '../inputTypeSchemas/AutomationTriggerUpdateManyMutationInputSchema'
import { AutomationTriggerUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AutomationTriggerUncheckedUpdateManyInputSchema'
import { AutomationTriggerWhereInputSchema } from '../inputTypeSchemas/AutomationTriggerWhereInputSchema'

export const AutomationTriggerUpdateManyArgsSchema: z.ZodType<Prisma.AutomationTriggerUpdateManyArgs> = z.object({
  data: z.union([ AutomationTriggerUpdateManyMutationInputSchema,AutomationTriggerUncheckedUpdateManyInputSchema ]),
  where: AutomationTriggerWhereInputSchema.optional(),
}).strict() ;

export default AutomationTriggerUpdateManyArgsSchema;
