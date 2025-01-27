import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationTriggerSelectSchema } from '../inputTypeSchemas/AutomationTriggerSelectSchema';
import { AutomationTriggerIncludeSchema } from '../inputTypeSchemas/AutomationTriggerIncludeSchema';

export const AutomationTriggerArgsSchema: z.ZodType<Prisma.AutomationTriggerDefaultArgs> = z.object({
  select: z.lazy(() => AutomationTriggerSelectSchema).optional(),
  include: z.lazy(() => AutomationTriggerIncludeSchema).optional(),
}).strict();

export default AutomationTriggerArgsSchema;
