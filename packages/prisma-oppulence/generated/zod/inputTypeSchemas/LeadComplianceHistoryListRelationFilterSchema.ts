import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceHistoryWhereInputSchema } from './LeadComplianceHistoryWhereInputSchema';

export const LeadComplianceHistoryListRelationFilterSchema: z.ZodType<Prisma.LeadComplianceHistoryListRelationFilter> = z.object({
  every: z.lazy(() => LeadComplianceHistoryWhereInputSchema).optional(),
  some: z.lazy(() => LeadComplianceHistoryWhereInputSchema).optional(),
  none: z.lazy(() => LeadComplianceHistoryWhereInputSchema).optional()
}).strict();

export default LeadComplianceHistoryListRelationFilterSchema;
