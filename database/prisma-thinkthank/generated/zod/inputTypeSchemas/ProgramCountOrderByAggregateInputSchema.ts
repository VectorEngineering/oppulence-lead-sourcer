import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProgramCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProgramCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  workspaceId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  wordmark: z.lazy(() => SortOrderSchema).optional(),
  brandColor: z.lazy(() => SortOrderSchema).optional(),
  domain: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  cookieLength: z.lazy(() => SortOrderSchema).optional(),
  commissionAmount: z.lazy(() => SortOrderSchema).optional(),
  commissionType: z.lazy(() => SortOrderSchema).optional(),
  commissionDuration: z.lazy(() => SortOrderSchema).optional(),
  commissionInterval: z.lazy(() => SortOrderSchema).optional(),
  landerData: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProgramCountOrderByAggregateInputSchema;
