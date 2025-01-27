import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationConditionScalarWhereInputSchema } from './AutomationConditionScalarWhereInputSchema';
import { AutomationConditionUpdateManyMutationInputSchema } from './AutomationConditionUpdateManyMutationInputSchema';
import { AutomationConditionUncheckedUpdateManyWithoutAutomationInputSchema } from './AutomationConditionUncheckedUpdateManyWithoutAutomationInputSchema';

export const AutomationConditionUpdateManyWithWhereWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationConditionUpdateManyWithWhereWithoutAutomationInput> = z.object({
  where: z.lazy(() => AutomationConditionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AutomationConditionUpdateManyMutationInputSchema),z.lazy(() => AutomationConditionUncheckedUpdateManyWithoutAutomationInputSchema) ]),
}).strict();

export default AutomationConditionUpdateManyWithWhereWithoutAutomationInputSchema;
