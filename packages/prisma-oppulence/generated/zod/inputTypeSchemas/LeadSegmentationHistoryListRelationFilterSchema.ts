import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationHistoryWhereInputSchema } from './LeadSegmentationHistoryWhereInputSchema';

export const LeadSegmentationHistoryListRelationFilterSchema: z.ZodType<Prisma.LeadSegmentationHistoryListRelationFilter> = z.object({
  every: z.lazy(() => LeadSegmentationHistoryWhereInputSchema).optional(),
  some: z.lazy(() => LeadSegmentationHistoryWhereInputSchema).optional(),
  none: z.lazy(() => LeadSegmentationHistoryWhereInputSchema).optional()
}).strict();

export default LeadSegmentationHistoryListRelationFilterSchema;
