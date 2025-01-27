import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadExternalSystemWhereInputSchema } from './LeadExternalSystemWhereInputSchema';

export const LeadExternalSystemListRelationFilterSchema: z.ZodType<Prisma.LeadExternalSystemListRelationFilter> = z.object({
  every: z.lazy(() => LeadExternalSystemWhereInputSchema).optional(),
  some: z.lazy(() => LeadExternalSystemWhereInputSchema).optional(),
  none: z.lazy(() => LeadExternalSystemWhereInputSchema).optional()
}).strict();

export default LeadExternalSystemListRelationFilterSchema;
