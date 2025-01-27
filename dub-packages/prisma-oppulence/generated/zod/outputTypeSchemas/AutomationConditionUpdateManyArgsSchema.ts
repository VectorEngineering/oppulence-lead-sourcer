import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationConditionUpdateManyMutationInputSchema } from '../inputTypeSchemas/AutomationConditionUpdateManyMutationInputSchema'
import { AutomationConditionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AutomationConditionUncheckedUpdateManyInputSchema'
import { AutomationConditionWhereInputSchema } from '../inputTypeSchemas/AutomationConditionWhereInputSchema'

export const AutomationConditionUpdateManyArgsSchema: z.ZodType<Prisma.AutomationConditionUpdateManyArgs> = z.object({
  data: z.union([ AutomationConditionUpdateManyMutationInputSchema,AutomationConditionUncheckedUpdateManyInputSchema ]),
  where: AutomationConditionWhereInputSchema.optional(),
}).strict() ;

export default AutomationConditionUpdateManyArgsSchema;
