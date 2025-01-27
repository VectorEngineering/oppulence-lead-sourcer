import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const AutomationTriggerScalarWhereInputSchema: z.ZodType<Prisma.AutomationTriggerScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AutomationTriggerScalarWhereInputSchema),z.lazy(() => AutomationTriggerScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AutomationTriggerScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AutomationTriggerScalarWhereInputSchema),z.lazy(() => AutomationTriggerScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  automationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  field: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  operator: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default AutomationTriggerScalarWhereInputSchema;
