import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationTriggerWhereInputSchema } from '../inputTypeSchemas/AutomationTriggerWhereInputSchema'

export const AutomationTriggerDeleteManyArgsSchema: z.ZodType<Prisma.AutomationTriggerDeleteManyArgs> = z.object({
  where: AutomationTriggerWhereInputSchema.optional(),
}).strict() ;

export default AutomationTriggerDeleteManyArgsSchema;
