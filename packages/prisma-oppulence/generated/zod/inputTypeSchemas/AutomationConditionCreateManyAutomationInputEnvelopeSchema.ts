import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationConditionCreateManyAutomationInputSchema } from './AutomationConditionCreateManyAutomationInputSchema';

export const AutomationConditionCreateManyAutomationInputEnvelopeSchema: z.ZodType<Prisma.AutomationConditionCreateManyAutomationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AutomationConditionCreateManyAutomationInputSchema),z.lazy(() => AutomationConditionCreateManyAutomationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AutomationConditionCreateManyAutomationInputEnvelopeSchema;
