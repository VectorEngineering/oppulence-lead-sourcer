import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationTriggerWhereInputSchema } from './AutomationTriggerWhereInputSchema';

export const AutomationTriggerListRelationFilterSchema: z.ZodType<Prisma.AutomationTriggerListRelationFilter> = z.object({
  every: z.lazy(() => AutomationTriggerWhereInputSchema).optional(),
  some: z.lazy(() => AutomationTriggerWhereInputSchema).optional(),
  none: z.lazy(() => AutomationTriggerWhereInputSchema).optional()
}).strict();

export default AutomationTriggerListRelationFilterSchema;
