import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ContractApprovalScalarWhereInputSchema: z.ZodType<Prisma.ContractApprovalScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ContractApprovalScalarWhereInputSchema),z.lazy(() => ContractApprovalScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContractApprovalScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContractApprovalScalarWhereInputSchema),z.lazy(() => ContractApprovalScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contractId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stage: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  approverRole: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  approverId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ContractApprovalScalarWhereInputSchema;
