import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema';
import { PipelineAutomationCreateWithoutPipelineInputSchema } from './PipelineAutomationCreateWithoutPipelineInputSchema';
import { PipelineAutomationUncheckedCreateWithoutPipelineInputSchema } from './PipelineAutomationUncheckedCreateWithoutPipelineInputSchema';

export const PipelineAutomationCreateOrConnectWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAutomationCreateOrConnectWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineAutomationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PipelineAutomationCreateWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationUncheckedCreateWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineAutomationCreateOrConnectWithoutPipelineInputSchema;
