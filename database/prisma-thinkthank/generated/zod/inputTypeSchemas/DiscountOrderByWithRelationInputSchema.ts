import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProgramOrderByWithRelationInputSchema } from './ProgramOrderByWithRelationInputSchema';
import { ProgramEnrollmentOrderByRelationAggregateInputSchema } from './ProgramEnrollmentOrderByRelationAggregateInputSchema';
import { DiscountOrderByRelevanceInputSchema } from './DiscountOrderByRelevanceInputSchema';

export const DiscountOrderByWithRelationInputSchema: z.ZodType<Prisma.DiscountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  duration: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  interval: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  couponId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  couponTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  workspaceId: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  program: z.lazy(() => ProgramOrderByWithRelationInputSchema).optional(),
  programEnrollments: z.lazy(() => ProgramEnrollmentOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => DiscountOrderByRelevanceInputSchema).optional()
}).strict();

export default DiscountOrderByWithRelationInputSchema;
