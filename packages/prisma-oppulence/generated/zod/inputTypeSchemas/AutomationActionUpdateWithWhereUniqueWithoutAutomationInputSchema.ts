import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationActionWhereUniqueInputSchema } from './AutomationActionWhereUniqueInputSchema';
import { AutomationActionUpdateWithoutAutomationInputSchema } from './AutomationActionUpdateWithoutAutomationInputSchema';
import { AutomationActionUncheckedUpdateWithoutAutomationInputSchema } from './AutomationActionUncheckedUpdateWithoutAutomationInputSchema';

export const AutomationActionUpdateWithWhereUniqueWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationActionUpdateWithWhereUniqueWithoutAutomationInput> = z.object({
  where: z.lazy(() => AutomationActionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AutomationActionUpdateWithoutAutomationInputSchema),z.lazy(() => AutomationActionUncheckedUpdateWithoutAutomationInputSchema) ]),
}).strict();

export default AutomationActionUpdateWithWhereUniqueWithoutAutomationInputSchema;
