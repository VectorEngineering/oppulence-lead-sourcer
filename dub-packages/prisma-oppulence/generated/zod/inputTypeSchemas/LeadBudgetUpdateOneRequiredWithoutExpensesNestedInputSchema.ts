import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetCreateWithoutExpensesInputSchema } from './LeadBudgetCreateWithoutExpensesInputSchema';
import { LeadBudgetUncheckedCreateWithoutExpensesInputSchema } from './LeadBudgetUncheckedCreateWithoutExpensesInputSchema';
import { LeadBudgetCreateOrConnectWithoutExpensesInputSchema } from './LeadBudgetCreateOrConnectWithoutExpensesInputSchema';
import { LeadBudgetUpsertWithoutExpensesInputSchema } from './LeadBudgetUpsertWithoutExpensesInputSchema';
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema';
import { LeadBudgetUpdateToOneWithWhereWithoutExpensesInputSchema } from './LeadBudgetUpdateToOneWithWhereWithoutExpensesInputSchema';
import { LeadBudgetUpdateWithoutExpensesInputSchema } from './LeadBudgetUpdateWithoutExpensesInputSchema';
import { LeadBudgetUncheckedUpdateWithoutExpensesInputSchema } from './LeadBudgetUncheckedUpdateWithoutExpensesInputSchema';

export const LeadBudgetUpdateOneRequiredWithoutExpensesNestedInputSchema: z.ZodType<Prisma.LeadBudgetUpdateOneRequiredWithoutExpensesNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadBudgetCreateWithoutExpensesInputSchema),z.lazy(() => LeadBudgetUncheckedCreateWithoutExpensesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadBudgetCreateOrConnectWithoutExpensesInputSchema).optional(),
  upsert: z.lazy(() => LeadBudgetUpsertWithoutExpensesInputSchema).optional(),
  connect: z.lazy(() => LeadBudgetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadBudgetUpdateToOneWithWhereWithoutExpensesInputSchema),z.lazy(() => LeadBudgetUpdateWithoutExpensesInputSchema),z.lazy(() => LeadBudgetUncheckedUpdateWithoutExpensesInputSchema) ]).optional(),
}).strict();

export default LeadBudgetUpdateOneRequiredWithoutExpensesNestedInputSchema;
