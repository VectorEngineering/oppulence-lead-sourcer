import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractApprovalOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ContractApprovalOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ContractApprovalOrderByRelationAggregateInputSchema;
