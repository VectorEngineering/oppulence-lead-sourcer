import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionReconciliationMatchWhereInputSchema } from './TransactionReconciliationMatchWhereInputSchema';

export const TransactionReconciliationMatchListRelationFilterSchema: z.ZodType<Prisma.TransactionReconciliationMatchListRelationFilter> = z.object({
  every: z.lazy(() => TransactionReconciliationMatchWhereInputSchema).optional(),
  some: z.lazy(() => TransactionReconciliationMatchWhereInputSchema).optional(),
  none: z.lazy(() => TransactionReconciliationMatchWhereInputSchema).optional()
}).strict();

export default TransactionReconciliationMatchListRelationFilterSchema;
