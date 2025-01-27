import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSocialProfileWhereInputSchema } from './LeadSocialProfileWhereInputSchema';

export const LeadSocialProfileListRelationFilterSchema: z.ZodType<Prisma.LeadSocialProfileListRelationFilter> = z.object({
  every: z.lazy(() => LeadSocialProfileWhereInputSchema).optional(),
  some: z.lazy(() => LeadSocialProfileWhereInputSchema).optional(),
  none: z.lazy(() => LeadSocialProfileWhereInputSchema).optional()
}).strict();

export default LeadSocialProfileListRelationFilterSchema;
