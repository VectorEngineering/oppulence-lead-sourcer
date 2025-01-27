import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationCreateWithoutTriggersInputSchema } from './PipelineAutomationCreateWithoutTriggersInputSchema';
import { PipelineAutomationUncheckedCreateWithoutTriggersInputSchema } from './PipelineAutomationUncheckedCreateWithoutTriggersInputSchema';
import { PipelineAutomationCreateOrConnectWithoutTriggersInputSchema } from './PipelineAutomationCreateOrConnectWithoutTriggersInputSchema';
import { PipelineAutomationUpsertWithoutTriggersInputSchema } from './PipelineAutomationUpsertWithoutTriggersInputSchema';
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema';
import { PipelineAutomationUpdateToOneWithWhereWithoutTriggersInputSchema } from './PipelineAutomationUpdateToOneWithWhereWithoutTriggersInputSchema';
import { PipelineAutomationUpdateWithoutTriggersInputSchema } from './PipelineAutomationUpdateWithoutTriggersInputSchema';
import { PipelineAutomationUncheckedUpdateWithoutTriggersInputSchema } from './PipelineAutomationUncheckedUpdateWithoutTriggersInputSchema';

export const PipelineAutomationUpdateOneRequiredWithoutTriggersNestedInputSchema: z.ZodType<Prisma.PipelineAutomationUpdateOneRequiredWithoutTriggersNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineAutomationCreateWithoutTriggersInputSchema),z.lazy(() => PipelineAutomationUncheckedCreateWithoutTriggersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineAutomationCreateOrConnectWithoutTriggersInputSchema).optional(),
  upsert: z.lazy(() => PipelineAutomationUpsertWithoutTriggersInputSchema).optional(),
  connect: z.lazy(() => PipelineAutomationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PipelineAutomationUpdateToOneWithWhereWithoutTriggersInputSchema),z.lazy(() => PipelineAutomationUpdateWithoutTriggersInputSchema),z.lazy(() => PipelineAutomationUncheckedUpdateWithoutTriggersInputSchema) ]).optional(),
}).strict();

export default PipelineAutomationUpdateOneRequiredWithoutTriggersNestedInputSchema;
