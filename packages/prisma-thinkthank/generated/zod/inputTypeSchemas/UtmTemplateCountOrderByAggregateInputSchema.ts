import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UtmTemplateCountOrderByAggregateInputSchema: z.ZodType<Prisma.UtmTemplateCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  utm_source: z.lazy(() => SortOrderSchema).optional(),
  utm_medium: z.lazy(() => SortOrderSchema).optional(),
  utm_campaign: z.lazy(() => SortOrderSchema).optional(),
  utm_term: z.lazy(() => SortOrderSchema).optional(),
  utm_content: z.lazy(() => SortOrderSchema).optional(),
  ref: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UtmTemplateCountOrderByAggregateInputSchema;
