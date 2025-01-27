import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProgramEnrollmentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProgramEnrollmentAvgOrderByAggregateInput> = z.object({
  commissionAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProgramEnrollmentAvgOrderByAggregateInputSchema;
