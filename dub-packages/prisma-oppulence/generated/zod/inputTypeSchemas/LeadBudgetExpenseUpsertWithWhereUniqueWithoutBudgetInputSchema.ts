import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetExpenseWhereUniqueInputSchema } from './LeadBudgetExpenseWhereUniqueInputSchema';
import { LeadBudgetExpenseUpdateWithoutBudgetInputSchema } from './LeadBudgetExpenseUpdateWithoutBudgetInputSchema';
import { LeadBudgetExpenseUncheckedUpdateWithoutBudgetInputSchema } from './LeadBudgetExpenseUncheckedUpdateWithoutBudgetInputSchema';
import { LeadBudgetExpenseCreateWithoutBudgetInputSchema } from './LeadBudgetExpenseCreateWithoutBudgetInputSchema';
import { LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema } from './LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema';

export const LeadBudgetExpenseUpsertWithWhereUniqueWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetExpenseUpsertWithWhereUniqueWithoutBudgetInput> = z.object({
  where: z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadBudgetExpenseUpdateWithoutBudgetInputSchema),z.lazy(() => LeadBudgetExpenseUncheckedUpdateWithoutBudgetInputSchema) ]),
  create: z.union([ z.lazy(() => LeadBudgetExpenseCreateWithoutBudgetInputSchema),z.lazy(() => LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema) ]),
}).strict();

export default LeadBudgetExpenseUpsertWithWhereUniqueWithoutBudgetInputSchema;
