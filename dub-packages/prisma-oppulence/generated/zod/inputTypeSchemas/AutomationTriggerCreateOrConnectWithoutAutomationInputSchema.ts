import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationTriggerWhereUniqueInputSchema } from './AutomationTriggerWhereUniqueInputSchema';
import { AutomationTriggerCreateWithoutAutomationInputSchema } from './AutomationTriggerCreateWithoutAutomationInputSchema';
import { AutomationTriggerUncheckedCreateWithoutAutomationInputSchema } from './AutomationTriggerUncheckedCreateWithoutAutomationInputSchema';

export const AutomationTriggerCreateOrConnectWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationTriggerCreateOrConnectWithoutAutomationInput> = z.object({
  where: z.lazy(() => AutomationTriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AutomationTriggerCreateWithoutAutomationInputSchema),z.lazy(() => AutomationTriggerUncheckedCreateWithoutAutomationInputSchema) ]),
}).strict();

export default AutomationTriggerCreateOrConnectWithoutAutomationInputSchema;
