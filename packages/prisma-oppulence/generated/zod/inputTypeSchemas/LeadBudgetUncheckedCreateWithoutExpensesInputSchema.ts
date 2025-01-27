import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BudgetStatusSchema } from './BudgetStatusSchema';
import { ApprovalStatusSchema } from './ApprovalStatusSchema';
import { LeadBudgetRevisionUncheckedCreateNestedManyWithoutBudgetInputSchema } from './LeadBudgetRevisionUncheckedCreateNestedManyWithoutBudgetInputSchema';

export const LeadBudgetUncheckedCreateWithoutExpensesInputSchema: z.ZodType<Prisma.LeadBudgetUncheckedCreateWithoutExpensesInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
  totalBudget: z.number(),
  allocatedBudget: z.number(),
  remainingBudget: z.number(),
  spentBudget: z.number().optional(),
  productCost: z.number().optional(),
  serviceCost: z.number().optional(),
  implementationCost: z.number().optional(),
  maintenanceCost: z.number().optional(),
  fiscalYear: z.number().int(),
  quarterlyBreakdown: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  monthlyBreakdown: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  status: z.lazy(() => BudgetStatusSchema).optional(),
  approvalStatus: z.lazy(() => ApprovalStatusSchema).optional(),
  approvedBy: z.string().optional().nullable(),
  approvedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  revisions: z.lazy(() => LeadBudgetRevisionUncheckedCreateNestedManyWithoutBudgetInputSchema).optional()
}).strict();

export default LeadBudgetUncheckedCreateWithoutExpensesInputSchema;
