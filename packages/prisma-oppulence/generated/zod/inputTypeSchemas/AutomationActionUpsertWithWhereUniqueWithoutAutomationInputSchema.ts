import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationActionWhereUniqueInputSchema } from './AutomationActionWhereUniqueInputSchema';
import { AutomationActionUpdateWithoutAutomationInputSchema } from './AutomationActionUpdateWithoutAutomationInputSchema';
import { AutomationActionUncheckedUpdateWithoutAutomationInputSchema } from './AutomationActionUncheckedUpdateWithoutAutomationInputSchema';
import { AutomationActionCreateWithoutAutomationInputSchema } from './AutomationActionCreateWithoutAutomationInputSchema';
import { AutomationActionUncheckedCreateWithoutAutomationInputSchema } from './AutomationActionUncheckedCreateWithoutAutomationInputSchema';

export const AutomationActionUpsertWithWhereUniqueWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationActionUpsertWithWhereUniqueWithoutAutomationInput> = z.object({
  where: z.lazy(() => AutomationActionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AutomationActionUpdateWithoutAutomationInputSchema),z.lazy(() => AutomationActionUncheckedUpdateWithoutAutomationInputSchema) ]),
  create: z.union([ z.lazy(() => AutomationActionCreateWithoutAutomationInputSchema),z.lazy(() => AutomationActionUncheckedCreateWithoutAutomationInputSchema) ]),
}).strict();

export default AutomationActionUpsertWithWhereUniqueWithoutAutomationInputSchema;
