import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationConditionCreateWithoutAutomationInputSchema } from './AutomationConditionCreateWithoutAutomationInputSchema';
import { AutomationConditionUncheckedCreateWithoutAutomationInputSchema } from './AutomationConditionUncheckedCreateWithoutAutomationInputSchema';
import { AutomationConditionCreateOrConnectWithoutAutomationInputSchema } from './AutomationConditionCreateOrConnectWithoutAutomationInputSchema';
import { AutomationConditionUpsertWithWhereUniqueWithoutAutomationInputSchema } from './AutomationConditionUpsertWithWhereUniqueWithoutAutomationInputSchema';
import { AutomationConditionCreateManyAutomationInputEnvelopeSchema } from './AutomationConditionCreateManyAutomationInputEnvelopeSchema';
import { AutomationConditionWhereUniqueInputSchema } from './AutomationConditionWhereUniqueInputSchema';
import { AutomationConditionUpdateWithWhereUniqueWithoutAutomationInputSchema } from './AutomationConditionUpdateWithWhereUniqueWithoutAutomationInputSchema';
import { AutomationConditionUpdateManyWithWhereWithoutAutomationInputSchema } from './AutomationConditionUpdateManyWithWhereWithoutAutomationInputSchema';
import { AutomationConditionScalarWhereInputSchema } from './AutomationConditionScalarWhereInputSchema';

export const AutomationConditionUpdateManyWithoutAutomationNestedInputSchema: z.ZodType<Prisma.AutomationConditionUpdateManyWithoutAutomationNestedInput> = z.object({
  create: z.union([ z.lazy(() => AutomationConditionCreateWithoutAutomationInputSchema),z.lazy(() => AutomationConditionCreateWithoutAutomationInputSchema).array(),z.lazy(() => AutomationConditionUncheckedCreateWithoutAutomationInputSchema),z.lazy(() => AutomationConditionUncheckedCreateWithoutAutomationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AutomationConditionCreateOrConnectWithoutAutomationInputSchema),z.lazy(() => AutomationConditionCreateOrConnectWithoutAutomationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AutomationConditionUpsertWithWhereUniqueWithoutAutomationInputSchema),z.lazy(() => AutomationConditionUpsertWithWhereUniqueWithoutAutomationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AutomationConditionCreateManyAutomationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AutomationConditionWhereUniqueInputSchema),z.lazy(() => AutomationConditionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AutomationConditionWhereUniqueInputSchema),z.lazy(() => AutomationConditionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AutomationConditionWhereUniqueInputSchema),z.lazy(() => AutomationConditionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AutomationConditionWhereUniqueInputSchema),z.lazy(() => AutomationConditionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AutomationConditionUpdateWithWhereUniqueWithoutAutomationInputSchema),z.lazy(() => AutomationConditionUpdateWithWhereUniqueWithoutAutomationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AutomationConditionUpdateManyWithWhereWithoutAutomationInputSchema),z.lazy(() => AutomationConditionUpdateManyWithWhereWithoutAutomationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AutomationConditionScalarWhereInputSchema),z.lazy(() => AutomationConditionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AutomationConditionUpdateManyWithoutAutomationNestedInputSchema;
