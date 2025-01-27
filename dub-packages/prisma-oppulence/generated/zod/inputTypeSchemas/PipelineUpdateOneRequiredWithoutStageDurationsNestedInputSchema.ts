import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineCreateWithoutStageDurationsInputSchema } from './PipelineCreateWithoutStageDurationsInputSchema';
import { PipelineUncheckedCreateWithoutStageDurationsInputSchema } from './PipelineUncheckedCreateWithoutStageDurationsInputSchema';
import { PipelineCreateOrConnectWithoutStageDurationsInputSchema } from './PipelineCreateOrConnectWithoutStageDurationsInputSchema';
import { PipelineUpsertWithoutStageDurationsInputSchema } from './PipelineUpsertWithoutStageDurationsInputSchema';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineUpdateToOneWithWhereWithoutStageDurationsInputSchema } from './PipelineUpdateToOneWithWhereWithoutStageDurationsInputSchema';
import { PipelineUpdateWithoutStageDurationsInputSchema } from './PipelineUpdateWithoutStageDurationsInputSchema';
import { PipelineUncheckedUpdateWithoutStageDurationsInputSchema } from './PipelineUncheckedUpdateWithoutStageDurationsInputSchema';

export const PipelineUpdateOneRequiredWithoutStageDurationsNestedInputSchema: z.ZodType<Prisma.PipelineUpdateOneRequiredWithoutStageDurationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineCreateWithoutStageDurationsInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutStageDurationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutStageDurationsInputSchema).optional(),
  upsert: z.lazy(() => PipelineUpsertWithoutStageDurationsInputSchema).optional(),
  connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PipelineUpdateToOneWithWhereWithoutStageDurationsInputSchema),z.lazy(() => PipelineUpdateWithoutStageDurationsInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutStageDurationsInputSchema) ]).optional(),
}).strict();

export default PipelineUpdateOneRequiredWithoutStageDurationsNestedInputSchema;
