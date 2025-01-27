import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationActionSelectSchema } from '../inputTypeSchemas/AutomationActionSelectSchema';
import { AutomationActionIncludeSchema } from '../inputTypeSchemas/AutomationActionIncludeSchema';

export const AutomationActionArgsSchema: z.ZodType<Prisma.AutomationActionDefaultArgs> = z.object({
  select: z.lazy(() => AutomationActionSelectSchema).optional(),
  include: z.lazy(() => AutomationActionIncludeSchema).optional(),
}).strict();

export default AutomationActionArgsSchema;
