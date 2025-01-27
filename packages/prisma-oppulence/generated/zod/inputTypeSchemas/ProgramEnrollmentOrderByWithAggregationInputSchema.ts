import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProgramEnrollmentCountOrderByAggregateInputSchema } from './ProgramEnrollmentCountOrderByAggregateInputSchema';
import { ProgramEnrollmentAvgOrderByAggregateInputSchema } from './ProgramEnrollmentAvgOrderByAggregateInputSchema';
import { ProgramEnrollmentMaxOrderByAggregateInputSchema } from './ProgramEnrollmentMaxOrderByAggregateInputSchema';
import { ProgramEnrollmentMinOrderByAggregateInputSchema } from './ProgramEnrollmentMinOrderByAggregateInputSchema';
import { ProgramEnrollmentSumOrderByAggregateInputSchema } from './ProgramEnrollmentSumOrderByAggregateInputSchema';

export const ProgramEnrollmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProgramEnrollmentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  partnerId: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  commissionAmount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  discountId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  applicationId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProgramEnrollmentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProgramEnrollmentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProgramEnrollmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProgramEnrollmentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProgramEnrollmentSumOrderByAggregateInputSchema).optional()
}).strict();

export default ProgramEnrollmentOrderByWithAggregationInputSchema;
