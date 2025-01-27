import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadDecisionMakerWhereInputSchema } from './LeadDecisionMakerWhereInputSchema';

export const LeadDecisionMakerListRelationFilterSchema: z.ZodType<Prisma.LeadDecisionMakerListRelationFilter> = z.object({
  every: z.lazy(() => LeadDecisionMakerWhereInputSchema).optional(),
  some: z.lazy(() => LeadDecisionMakerWhereInputSchema).optional(),
  none: z.lazy(() => LeadDecisionMakerWhereInputSchema).optional()
}).strict();

export default LeadDecisionMakerListRelationFilterSchema;
