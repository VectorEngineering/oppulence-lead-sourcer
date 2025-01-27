import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetWhereInputSchema } from '../inputTypeSchemas/LeadBudgetWhereInputSchema'

export const LeadBudgetDeleteManyArgsSchema: z.ZodType<Prisma.LeadBudgetDeleteManyArgs> = z.object({
  where: LeadBudgetWhereInputSchema.optional(),
}).strict() ;

export default LeadBudgetDeleteManyArgsSchema;
