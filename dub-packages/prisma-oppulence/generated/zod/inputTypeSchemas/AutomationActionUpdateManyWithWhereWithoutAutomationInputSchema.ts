import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationActionScalarWhereInputSchema } from './AutomationActionScalarWhereInputSchema';
import { AutomationActionUpdateManyMutationInputSchema } from './AutomationActionUpdateManyMutationInputSchema';
import { AutomationActionUncheckedUpdateManyWithoutAutomationInputSchema } from './AutomationActionUncheckedUpdateManyWithoutAutomationInputSchema';

export const AutomationActionUpdateManyWithWhereWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationActionUpdateManyWithWhereWithoutAutomationInput> = z.object({
  where: z.lazy(() => AutomationActionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AutomationActionUpdateManyMutationInputSchema),z.lazy(() => AutomationActionUncheckedUpdateManyWithoutAutomationInputSchema) ]),
}).strict();

export default AutomationActionUpdateManyWithWhereWithoutAutomationInputSchema;
