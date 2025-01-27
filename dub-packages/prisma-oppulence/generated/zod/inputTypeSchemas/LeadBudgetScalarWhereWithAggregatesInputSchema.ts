import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { EnumBudgetStatusWithAggregatesFilterSchema } from './EnumBudgetStatusWithAggregatesFilterSchema';
import { BudgetStatusSchema } from './BudgetStatusSchema';
import { EnumApprovalStatusWithAggregatesFilterSchema } from './EnumApprovalStatusWithAggregatesFilterSchema';
import { ApprovalStatusSchema } from './ApprovalStatusSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadBudgetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadBudgetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadBudgetScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadBudgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadBudgetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadBudgetScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadBudgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  totalBudget: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  allocatedBudget: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  remainingBudget: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  spentBudget: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  productCost: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  serviceCost: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  implementationCost: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  maintenanceCost: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  fiscalYear: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  quarterlyBreakdown: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  monthlyBreakdown: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumBudgetStatusWithAggregatesFilterSchema),z.lazy(() => BudgetStatusSchema) ]).optional(),
  approvalStatus: z.union([ z.lazy(() => EnumApprovalStatusWithAggregatesFilterSchema),z.lazy(() => ApprovalStatusSchema) ]).optional(),
  approvedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  approvedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadBudgetScalarWhereWithAggregatesInputSchema;
