import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationActionWhereInputSchema } from '../inputTypeSchemas/AutomationActionWhereInputSchema'

export const AutomationActionDeleteManyArgsSchema: z.ZodType<Prisma.AutomationActionDeleteManyArgs> = z.object({
  where: AutomationActionWhereInputSchema.optional(),
}).strict() ;

export default AutomationActionDeleteManyArgsSchema;
