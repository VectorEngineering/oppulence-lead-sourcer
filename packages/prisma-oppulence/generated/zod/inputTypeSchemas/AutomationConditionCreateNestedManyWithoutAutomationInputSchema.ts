import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationConditionCreateWithoutAutomationInputSchema } from './AutomationConditionCreateWithoutAutomationInputSchema';
import { AutomationConditionUncheckedCreateWithoutAutomationInputSchema } from './AutomationConditionUncheckedCreateWithoutAutomationInputSchema';
import { AutomationConditionCreateOrConnectWithoutAutomationInputSchema } from './AutomationConditionCreateOrConnectWithoutAutomationInputSchema';
import { AutomationConditionCreateManyAutomationInputEnvelopeSchema } from './AutomationConditionCreateManyAutomationInputEnvelopeSchema';
import { AutomationConditionWhereUniqueInputSchema } from './AutomationConditionWhereUniqueInputSchema';

export const AutomationConditionCreateNestedManyWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationConditionCreateNestedManyWithoutAutomationInput> = z.object({
  create: z.union([ z.lazy(() => AutomationConditionCreateWithoutAutomationInputSchema),z.lazy(() => AutomationConditionCreateWithoutAutomationInputSchema).array(),z.lazy(() => AutomationConditionUncheckedCreateWithoutAutomationInputSchema),z.lazy(() => AutomationConditionUncheckedCreateWithoutAutomationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AutomationConditionCreateOrConnectWithoutAutomationInputSchema),z.lazy(() => AutomationConditionCreateOrConnectWithoutAutomationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AutomationConditionCreateManyAutomationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AutomationConditionWhereUniqueInputSchema),z.lazy(() => AutomationConditionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AutomationConditionCreateNestedManyWithoutAutomationInputSchema;
