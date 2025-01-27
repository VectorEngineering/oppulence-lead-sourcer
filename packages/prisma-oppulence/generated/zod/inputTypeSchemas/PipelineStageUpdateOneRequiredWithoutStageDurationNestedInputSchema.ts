import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageCreateWithoutStageDurationInputSchema } from './PipelineStageCreateWithoutStageDurationInputSchema';
import { PipelineStageUncheckedCreateWithoutStageDurationInputSchema } from './PipelineStageUncheckedCreateWithoutStageDurationInputSchema';
import { PipelineStageCreateOrConnectWithoutStageDurationInputSchema } from './PipelineStageCreateOrConnectWithoutStageDurationInputSchema';
import { PipelineStageUpsertWithoutStageDurationInputSchema } from './PipelineStageUpsertWithoutStageDurationInputSchema';
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema';
import { PipelineStageUpdateToOneWithWhereWithoutStageDurationInputSchema } from './PipelineStageUpdateToOneWithWhereWithoutStageDurationInputSchema';
import { PipelineStageUpdateWithoutStageDurationInputSchema } from './PipelineStageUpdateWithoutStageDurationInputSchema';
import { PipelineStageUncheckedUpdateWithoutStageDurationInputSchema } from './PipelineStageUncheckedUpdateWithoutStageDurationInputSchema';

export const PipelineStageUpdateOneRequiredWithoutStageDurationNestedInputSchema: z.ZodType<Prisma.PipelineStageUpdateOneRequiredWithoutStageDurationNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineStageCreateWithoutStageDurationInputSchema),z.lazy(() => PipelineStageUncheckedCreateWithoutStageDurationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineStageCreateOrConnectWithoutStageDurationInputSchema).optional(),
  upsert: z.lazy(() => PipelineStageUpsertWithoutStageDurationInputSchema).optional(),
  connect: z.lazy(() => PipelineStageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PipelineStageUpdateToOneWithWhereWithoutStageDurationInputSchema),z.lazy(() => PipelineStageUpdateWithoutStageDurationInputSchema),z.lazy(() => PipelineStageUncheckedUpdateWithoutStageDurationInputSchema) ]).optional(),
}).strict();

export default PipelineStageUpdateOneRequiredWithoutStageDurationNestedInputSchema;
