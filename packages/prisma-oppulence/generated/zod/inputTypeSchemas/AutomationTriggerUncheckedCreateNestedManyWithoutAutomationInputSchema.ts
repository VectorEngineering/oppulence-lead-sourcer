import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationTriggerCreateWithoutAutomationInputSchema } from './AutomationTriggerCreateWithoutAutomationInputSchema';
import { AutomationTriggerUncheckedCreateWithoutAutomationInputSchema } from './AutomationTriggerUncheckedCreateWithoutAutomationInputSchema';
import { AutomationTriggerCreateOrConnectWithoutAutomationInputSchema } from './AutomationTriggerCreateOrConnectWithoutAutomationInputSchema';
import { AutomationTriggerCreateManyAutomationInputEnvelopeSchema } from './AutomationTriggerCreateManyAutomationInputEnvelopeSchema';
import { AutomationTriggerWhereUniqueInputSchema } from './AutomationTriggerWhereUniqueInputSchema';

export const AutomationTriggerUncheckedCreateNestedManyWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationTriggerUncheckedCreateNestedManyWithoutAutomationInput> = z.object({
  create: z.union([ z.lazy(() => AutomationTriggerCreateWithoutAutomationInputSchema),z.lazy(() => AutomationTriggerCreateWithoutAutomationInputSchema).array(),z.lazy(() => AutomationTriggerUncheckedCreateWithoutAutomationInputSchema),z.lazy(() => AutomationTriggerUncheckedCreateWithoutAutomationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AutomationTriggerCreateOrConnectWithoutAutomationInputSchema),z.lazy(() => AutomationTriggerCreateOrConnectWithoutAutomationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AutomationTriggerCreateManyAutomationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AutomationTriggerWhereUniqueInputSchema),z.lazy(() => AutomationTriggerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AutomationTriggerUncheckedCreateNestedManyWithoutAutomationInputSchema;
