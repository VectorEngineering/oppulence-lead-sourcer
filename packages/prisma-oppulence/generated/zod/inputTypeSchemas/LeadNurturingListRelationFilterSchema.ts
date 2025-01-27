import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadNurturingWhereInputSchema } from './LeadNurturingWhereInputSchema';

export const LeadNurturingListRelationFilterSchema: z.ZodType<Prisma.LeadNurturingListRelationFilter> = z.object({
  every: z.lazy(() => LeadNurturingWhereInputSchema).optional(),
  some: z.lazy(() => LeadNurturingWhereInputSchema).optional(),
  none: z.lazy(() => LeadNurturingWhereInputSchema).optional()
}).strict();

export default LeadNurturingListRelationFilterSchema;
