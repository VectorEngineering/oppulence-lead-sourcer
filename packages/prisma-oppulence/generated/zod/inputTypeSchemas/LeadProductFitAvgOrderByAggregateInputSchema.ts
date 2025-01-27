import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadProductFitAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LeadProductFitAvgOrderByAggregateInput> = z.object({
  technicalFit: z.lazy(() => SortOrderSchema).optional(),
  businessFit: z.lazy(() => SortOrderSchema).optional(),
  culturalFit: z.lazy(() => SortOrderSchema).optional(),
  budgetFit: z.lazy(() => SortOrderSchema).optional(),
  overallFit: z.lazy(() => SortOrderSchema).optional(),
  integrationCosts: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadProductFitAvgOrderByAggregateInputSchema;
