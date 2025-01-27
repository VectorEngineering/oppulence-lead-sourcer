import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationConditionWhereUniqueInputSchema } from './AutomationConditionWhereUniqueInputSchema';
import { AutomationConditionUpdateWithoutAutomationInputSchema } from './AutomationConditionUpdateWithoutAutomationInputSchema';
import { AutomationConditionUncheckedUpdateWithoutAutomationInputSchema } from './AutomationConditionUncheckedUpdateWithoutAutomationInputSchema';
import { AutomationConditionCreateWithoutAutomationInputSchema } from './AutomationConditionCreateWithoutAutomationInputSchema';
import { AutomationConditionUncheckedCreateWithoutAutomationInputSchema } from './AutomationConditionUncheckedCreateWithoutAutomationInputSchema';

export const AutomationConditionUpsertWithWhereUniqueWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationConditionUpsertWithWhereUniqueWithoutAutomationInput> = z.object({
  where: z.lazy(() => AutomationConditionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AutomationConditionUpdateWithoutAutomationInputSchema),z.lazy(() => AutomationConditionUncheckedUpdateWithoutAutomationInputSchema) ]),
  create: z.union([ z.lazy(() => AutomationConditionCreateWithoutAutomationInputSchema),z.lazy(() => AutomationConditionUncheckedCreateWithoutAutomationInputSchema) ]),
}).strict();

export default AutomationConditionUpsertWithWhereUniqueWithoutAutomationInputSchema;
