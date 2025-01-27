import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationWhereInputSchema } from './LeadSegmentationWhereInputSchema';

export const LeadSegmentationListRelationFilterSchema: z.ZodType<Prisma.LeadSegmentationListRelationFilter> = z.object({
  every: z.lazy(() => LeadSegmentationWhereInputSchema).optional(),
  some: z.lazy(() => LeadSegmentationWhereInputSchema).optional(),
  none: z.lazy(() => LeadSegmentationWhereInputSchema).optional()
}).strict();

export default LeadSegmentationListRelationFilterSchema;
