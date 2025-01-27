import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema';
import { PipelineStageCreateWithoutStageDurationInputSchema } from './PipelineStageCreateWithoutStageDurationInputSchema';
import { PipelineStageUncheckedCreateWithoutStageDurationInputSchema } from './PipelineStageUncheckedCreateWithoutStageDurationInputSchema';

export const PipelineStageCreateOrConnectWithoutStageDurationInputSchema: z.ZodType<Prisma.PipelineStageCreateOrConnectWithoutStageDurationInput> = z.object({
  where: z.lazy(() => PipelineStageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PipelineStageCreateWithoutStageDurationInputSchema),z.lazy(() => PipelineStageUncheckedCreateWithoutStageDurationInputSchema) ]),
}).strict();

export default PipelineStageCreateOrConnectWithoutStageDurationInputSchema;
