import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationTriggerCreateWithoutAutomationInputSchema } from './AutomationTriggerCreateWithoutAutomationInputSchema';
import { AutomationTriggerUncheckedCreateWithoutAutomationInputSchema } from './AutomationTriggerUncheckedCreateWithoutAutomationInputSchema';
import { AutomationTriggerCreateOrConnectWithoutAutomationInputSchema } from './AutomationTriggerCreateOrConnectWithoutAutomationInputSchema';
import { AutomationTriggerUpsertWithWhereUniqueWithoutAutomationInputSchema } from './AutomationTriggerUpsertWithWhereUniqueWithoutAutomationInputSchema';
import { AutomationTriggerCreateManyAutomationInputEnvelopeSchema } from './AutomationTriggerCreateManyAutomationInputEnvelopeSchema';
import { AutomationTriggerWhereUniqueInputSchema } from './AutomationTriggerWhereUniqueInputSchema';
import { AutomationTriggerUpdateWithWhereUniqueWithoutAutomationInputSchema } from './AutomationTriggerUpdateWithWhereUniqueWithoutAutomationInputSchema';
import { AutomationTriggerUpdateManyWithWhereWithoutAutomationInputSchema } from './AutomationTriggerUpdateManyWithWhereWithoutAutomationInputSchema';
import { AutomationTriggerScalarWhereInputSchema } from './AutomationTriggerScalarWhereInputSchema';

export const AutomationTriggerUncheckedUpdateManyWithoutAutomationNestedInputSchema: z.ZodType<Prisma.AutomationTriggerUncheckedUpdateManyWithoutAutomationNestedInput> = z.object({
  create: z.union([ z.lazy(() => AutomationTriggerCreateWithoutAutomationInputSchema),z.lazy(() => AutomationTriggerCreateWithoutAutomationInputSchema).array(),z.lazy(() => AutomationTriggerUncheckedCreateWithoutAutomationInputSchema),z.lazy(() => AutomationTriggerUncheckedCreateWithoutAutomationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AutomationTriggerCreateOrConnectWithoutAutomationInputSchema),z.lazy(() => AutomationTriggerCreateOrConnectWithoutAutomationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AutomationTriggerUpsertWithWhereUniqueWithoutAutomationInputSchema),z.lazy(() => AutomationTriggerUpsertWithWhereUniqueWithoutAutomationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AutomationTriggerCreateManyAutomationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AutomationTriggerWhereUniqueInputSchema),z.lazy(() => AutomationTriggerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AutomationTriggerWhereUniqueInputSchema),z.lazy(() => AutomationTriggerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AutomationTriggerWhereUniqueInputSchema),z.lazy(() => AutomationTriggerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AutomationTriggerWhereUniqueInputSchema),z.lazy(() => AutomationTriggerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AutomationTriggerUpdateWithWhereUniqueWithoutAutomationInputSchema),z.lazy(() => AutomationTriggerUpdateWithWhereUniqueWithoutAutomationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AutomationTriggerUpdateManyWithWhereWithoutAutomationInputSchema),z.lazy(() => AutomationTriggerUpdateManyWithWhereWithoutAutomationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AutomationTriggerScalarWhereInputSchema),z.lazy(() => AutomationTriggerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AutomationTriggerUncheckedUpdateManyWithoutAutomationNestedInputSchema;
