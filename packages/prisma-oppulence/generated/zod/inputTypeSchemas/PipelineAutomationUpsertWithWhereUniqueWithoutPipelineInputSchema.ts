import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema';
import { PipelineAutomationUpdateWithoutPipelineInputSchema } from './PipelineAutomationUpdateWithoutPipelineInputSchema';
import { PipelineAutomationUncheckedUpdateWithoutPipelineInputSchema } from './PipelineAutomationUncheckedUpdateWithoutPipelineInputSchema';
import { PipelineAutomationCreateWithoutPipelineInputSchema } from './PipelineAutomationCreateWithoutPipelineInputSchema';
import { PipelineAutomationUncheckedCreateWithoutPipelineInputSchema } from './PipelineAutomationUncheckedCreateWithoutPipelineInputSchema';

export const PipelineAutomationUpsertWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAutomationUpsertWithWhereUniqueWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineAutomationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PipelineAutomationUpdateWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationUncheckedUpdateWithoutPipelineInputSchema) ]),
  create: z.union([ z.lazy(() => PipelineAutomationCreateWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationUncheckedCreateWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineAutomationUpsertWithWhereUniqueWithoutPipelineInputSchema;
