import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationActionWhereInputSchema } from './AutomationActionWhereInputSchema';

export const AutomationActionListRelationFilterSchema: z.ZodType<Prisma.AutomationActionListRelationFilter> = z.object({
  every: z.lazy(() => AutomationActionWhereInputSchema).optional(),
  some: z.lazy(() => AutomationActionWhereInputSchema).optional(),
  none: z.lazy(() => AutomationActionWhereInputSchema).optional()
}).strict();

export default AutomationActionListRelationFilterSchema;
