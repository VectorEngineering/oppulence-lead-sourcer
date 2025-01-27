import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadConsentWhereInputSchema } from './LeadConsentWhereInputSchema';

export const LeadConsentListRelationFilterSchema: z.ZodType<Prisma.LeadConsentListRelationFilter> = z.object({
  every: z.lazy(() => LeadConsentWhereInputSchema).optional(),
  some: z.lazy(() => LeadConsentWhereInputSchema).optional(),
  none: z.lazy(() => LeadConsentWhereInputSchema).optional()
}).strict();

export default LeadConsentListRelationFilterSchema;
