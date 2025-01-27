import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetExpenseWhereUniqueInputSchema } from './LeadBudgetExpenseWhereUniqueInputSchema';
import { LeadBudgetExpenseCreateWithoutBudgetInputSchema } from './LeadBudgetExpenseCreateWithoutBudgetInputSchema';
import { LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema } from './LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema';

export const LeadBudgetExpenseCreateOrConnectWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetExpenseCreateOrConnectWithoutBudgetInput> = z.object({
  where: z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadBudgetExpenseCreateWithoutBudgetInputSchema),z.lazy(() => LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema) ]),
}).strict();

export default LeadBudgetExpenseCreateOrConnectWithoutBudgetInputSchema;
