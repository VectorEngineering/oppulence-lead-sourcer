import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationCreateWithoutTriggersInputSchema } from './PipelineAutomationCreateWithoutTriggersInputSchema';
import { PipelineAutomationUncheckedCreateWithoutTriggersInputSchema } from './PipelineAutomationUncheckedCreateWithoutTriggersInputSchema';
import { PipelineAutomationCreateOrConnectWithoutTriggersInputSchema } from './PipelineAutomationCreateOrConnectWithoutTriggersInputSchema';
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema';

export const PipelineAutomationCreateNestedOneWithoutTriggersInputSchema: z.ZodType<Prisma.PipelineAutomationCreateNestedOneWithoutTriggersInput> = z.object({
  create: z.union([ z.lazy(() => PipelineAutomationCreateWithoutTriggersInputSchema),z.lazy(() => PipelineAutomationUncheckedCreateWithoutTriggersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineAutomationCreateOrConnectWithoutTriggersInputSchema).optional(),
  connect: z.lazy(() => PipelineAutomationWhereUniqueInputSchema).optional()
}).strict();

export default PipelineAutomationCreateNestedOneWithoutTriggersInputSchema;
