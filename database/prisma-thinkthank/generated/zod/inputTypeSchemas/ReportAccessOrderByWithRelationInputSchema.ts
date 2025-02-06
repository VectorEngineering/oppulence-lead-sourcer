import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ReportOrderByWithRelationInputSchema } from './ReportOrderByWithRelationInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { ReportAccessOrderByRelevanceInputSchema } from './ReportAccessOrderByRelevanceInputSchema';

export const ReportAccessOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportAccessOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reportId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessType: z.lazy(() => SortOrderSchema).optional(),
  report: z.lazy(() => ReportOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ReportAccessOrderByRelevanceInputSchema).optional()
}).strict();

export default ReportAccessOrderByWithRelationInputSchema;
