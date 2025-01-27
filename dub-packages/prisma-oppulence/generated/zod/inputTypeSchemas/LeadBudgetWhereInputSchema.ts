import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { EnumBudgetStatusFilterSchema } from './EnumBudgetStatusFilterSchema';
import { BudgetStatusSchema } from './BudgetStatusSchema';
import { EnumApprovalStatusFilterSchema } from './EnumApprovalStatusFilterSchema';
import { ApprovalStatusSchema } from './ApprovalStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadBudgetRevisionListRelationFilterSchema } from './LeadBudgetRevisionListRelationFilterSchema';
import { LeadBudgetExpenseListRelationFilterSchema } from './LeadBudgetExpenseListRelationFilterSchema';

export const LeadBudgetWhereInputSchema: z.ZodType<Prisma.LeadBudgetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadBudgetWhereInputSchema),z.lazy(() => LeadBudgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadBudgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadBudgetWhereInputSchema),z.lazy(() => LeadBudgetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  totalBudget: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  allocatedBudget: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  remainingBudget: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  spentBudget: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  productCost: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  serviceCost: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  implementationCost: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  maintenanceCost: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  fiscalYear: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  quarterlyBreakdown: z.lazy(() => JsonFilterSchema).optional(),
  monthlyBreakdown: z.lazy(() => JsonFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumBudgetStatusFilterSchema),z.lazy(() => BudgetStatusSchema) ]).optional(),
  approvalStatus: z.union([ z.lazy(() => EnumApprovalStatusFilterSchema),z.lazy(() => ApprovalStatusSchema) ]).optional(),
  approvedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  approvedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
  revisions: z.lazy(() => LeadBudgetRevisionListRelationFilterSchema).optional(),
  expenses: z.lazy(() => LeadBudgetExpenseListRelationFilterSchema).optional()
}).strict();

export default LeadBudgetWhereInputSchema;
