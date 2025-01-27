import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetExpenseSelectSchema } from '../inputTypeSchemas/LeadBudgetExpenseSelectSchema';
import { LeadBudgetExpenseIncludeSchema } from '../inputTypeSchemas/LeadBudgetExpenseIncludeSchema';

export const LeadBudgetExpenseArgsSchema: z.ZodType<Prisma.LeadBudgetExpenseDefaultArgs> = z.object({
  select: z.lazy(() => LeadBudgetExpenseSelectSchema).optional(),
  include: z.lazy(() => LeadBudgetExpenseIncludeSchema).optional(),
}).strict();

export default LeadBudgetExpenseArgsSchema;
