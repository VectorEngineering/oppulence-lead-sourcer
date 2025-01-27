import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageCreateWithoutStageDurationInputSchema } from './PipelineStageCreateWithoutStageDurationInputSchema';
import { PipelineStageUncheckedCreateWithoutStageDurationInputSchema } from './PipelineStageUncheckedCreateWithoutStageDurationInputSchema';
import { PipelineStageCreateOrConnectWithoutStageDurationInputSchema } from './PipelineStageCreateOrConnectWithoutStageDurationInputSchema';
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema';

export const PipelineStageCreateNestedOneWithoutStageDurationInputSchema: z.ZodType<Prisma.PipelineStageCreateNestedOneWithoutStageDurationInput> = z.object({
  create: z.union([ z.lazy(() => PipelineStageCreateWithoutStageDurationInputSchema),z.lazy(() => PipelineStageUncheckedCreateWithoutStageDurationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineStageCreateOrConnectWithoutStageDurationInputSchema).optional(),
  connect: z.lazy(() => PipelineStageWhereUniqueInputSchema).optional()
}).strict();

export default PipelineStageCreateNestedOneWithoutStageDurationInputSchema;
