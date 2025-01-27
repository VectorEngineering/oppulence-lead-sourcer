import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ContractApprovalScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContractApprovalScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ContractApprovalScalarWhereWithAggregatesInputSchema),z.lazy(() => ContractApprovalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContractApprovalScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContractApprovalScalarWhereWithAggregatesInputSchema),z.lazy(() => ContractApprovalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  contractId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  stage: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  approverRole: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  approverId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ContractApprovalScalarWhereWithAggregatesInputSchema;
