import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationConditionWhereInputSchema } from './AutomationConditionWhereInputSchema';

export const AutomationConditionListRelationFilterSchema: z.ZodType<Prisma.AutomationConditionListRelationFilter> = z.object({
  every: z.lazy(() => AutomationConditionWhereInputSchema).optional(),
  some: z.lazy(() => AutomationConditionWhereInputSchema).optional(),
  none: z.lazy(() => AutomationConditionWhereInputSchema).optional()
}).strict();

export default AutomationConditionListRelationFilterSchema;
