import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractApprovalWhereInputSchema } from './ContractApprovalWhereInputSchema';

export const ContractApprovalListRelationFilterSchema: z.ZodType<Prisma.ContractApprovalListRelationFilter> = z.object({
  every: z.lazy(() => ContractApprovalWhereInputSchema).optional(),
  some: z.lazy(() => ContractApprovalWhereInputSchema).optional(),
  none: z.lazy(() => ContractApprovalWhereInputSchema).optional()
}).strict();

export default ContractApprovalListRelationFilterSchema;
