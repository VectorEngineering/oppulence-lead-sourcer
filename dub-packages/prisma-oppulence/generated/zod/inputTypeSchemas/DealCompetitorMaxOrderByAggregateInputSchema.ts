import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DealCompetitorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DealCompetitorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dealId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  strengths: z.lazy(() => SortOrderSchema).optional(),
  weaknesses: z.lazy(() => SortOrderSchema).optional(),
  strategy: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  threatLevel: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DealCompetitorMaxOrderByAggregateInputSchema;
