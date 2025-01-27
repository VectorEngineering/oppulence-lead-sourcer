import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetCountOutputTypeSelectSchema } from './LeadBudgetCountOutputTypeSelectSchema';

export const LeadBudgetCountOutputTypeArgsSchema: z.ZodType<Prisma.LeadBudgetCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LeadBudgetCountOutputTypeSelectSchema).nullish(),
}).strict();

export default LeadBudgetCountOutputTypeSelectSchema;
