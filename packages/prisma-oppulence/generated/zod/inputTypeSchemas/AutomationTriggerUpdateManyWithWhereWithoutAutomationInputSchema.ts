import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationTriggerScalarWhereInputSchema } from './AutomationTriggerScalarWhereInputSchema';
import { AutomationTriggerUpdateManyMutationInputSchema } from './AutomationTriggerUpdateManyMutationInputSchema';
import { AutomationTriggerUncheckedUpdateManyWithoutAutomationInputSchema } from './AutomationTriggerUncheckedUpdateManyWithoutAutomationInputSchema';

export const AutomationTriggerUpdateManyWithWhereWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationTriggerUpdateManyWithWhereWithoutAutomationInput> = z.object({
  where: z.lazy(() => AutomationTriggerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AutomationTriggerUpdateManyMutationInputSchema),z.lazy(() => AutomationTriggerUncheckedUpdateManyWithoutAutomationInputSchema) ]),
}).strict();

export default AutomationTriggerUpdateManyWithWhereWithoutAutomationInputSchema;
