import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetCreateWithoutExpensesInputSchema } from './LeadBudgetCreateWithoutExpensesInputSchema';
import { LeadBudgetUncheckedCreateWithoutExpensesInputSchema } from './LeadBudgetUncheckedCreateWithoutExpensesInputSchema';
import { LeadBudgetCreateOrConnectWithoutExpensesInputSchema } from './LeadBudgetCreateOrConnectWithoutExpensesInputSchema';
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema';

export const LeadBudgetCreateNestedOneWithoutExpensesInputSchema: z.ZodType<Prisma.LeadBudgetCreateNestedOneWithoutExpensesInput> = z.object({
  create: z.union([ z.lazy(() => LeadBudgetCreateWithoutExpensesInputSchema),z.lazy(() => LeadBudgetUncheckedCreateWithoutExpensesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadBudgetCreateOrConnectWithoutExpensesInputSchema).optional(),
  connect: z.lazy(() => LeadBudgetWhereUniqueInputSchema).optional()
}).strict();

export default LeadBudgetCreateNestedOneWithoutExpensesInputSchema;
