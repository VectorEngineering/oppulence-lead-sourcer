import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AutomationConditionCreateManyInputSchema: z.ZodType<Prisma.AutomationConditionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  automationId: z.string(),
  field: z.string(),
  operator: z.string(),
  value: z.string()
}).strict();

export default AutomationConditionCreateManyInputSchema;
