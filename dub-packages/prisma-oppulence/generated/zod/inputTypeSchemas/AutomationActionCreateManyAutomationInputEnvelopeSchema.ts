import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationActionCreateManyAutomationInputSchema } from './AutomationActionCreateManyAutomationInputSchema';

export const AutomationActionCreateManyAutomationInputEnvelopeSchema: z.ZodType<Prisma.AutomationActionCreateManyAutomationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AutomationActionCreateManyAutomationInputSchema),z.lazy(() => AutomationActionCreateManyAutomationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AutomationActionCreateManyAutomationInputEnvelopeSchema;
