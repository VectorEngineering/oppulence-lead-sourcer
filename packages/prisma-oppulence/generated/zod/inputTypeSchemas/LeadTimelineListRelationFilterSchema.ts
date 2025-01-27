import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTimelineWhereInputSchema } from './LeadTimelineWhereInputSchema';

export const LeadTimelineListRelationFilterSchema: z.ZodType<Prisma.LeadTimelineListRelationFilter> = z.object({
  every: z.lazy(() => LeadTimelineWhereInputSchema).optional(),
  some: z.lazy(() => LeadTimelineWhereInputSchema).optional(),
  none: z.lazy(() => LeadTimelineWhereInputSchema).optional()
}).strict();

export default LeadTimelineListRelationFilterSchema;
