import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetExpenseScalarWhereInputSchema } from './LeadBudgetExpenseScalarWhereInputSchema';
import { LeadBudgetExpenseUpdateManyMutationInputSchema } from './LeadBudgetExpenseUpdateManyMutationInputSchema';
import { LeadBudgetExpenseUncheckedUpdateManyWithoutBudgetInputSchema } from './LeadBudgetExpenseUncheckedUpdateManyWithoutBudgetInputSchema';

export const LeadBudgetExpenseUpdateManyWithWhereWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetExpenseUpdateManyWithWhereWithoutBudgetInput> = z.object({
  where: z.lazy(() => LeadBudgetExpenseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadBudgetExpenseUpdateManyMutationInputSchema),z.lazy(() => LeadBudgetExpenseUncheckedUpdateManyWithoutBudgetInputSchema) ]),
}).strict();

export default LeadBudgetExpenseUpdateManyWithWhereWithoutBudgetInputSchema;
