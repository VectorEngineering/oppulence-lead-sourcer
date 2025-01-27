import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineCreateWithoutStagesInputSchema } from './PipelineCreateWithoutStagesInputSchema';
import { PipelineUncheckedCreateWithoutStagesInputSchema } from './PipelineUncheckedCreateWithoutStagesInputSchema';
import { PipelineCreateOrConnectWithoutStagesInputSchema } from './PipelineCreateOrConnectWithoutStagesInputSchema';
import { PipelineUpsertWithoutStagesInputSchema } from './PipelineUpsertWithoutStagesInputSchema';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineUpdateToOneWithWhereWithoutStagesInputSchema } from './PipelineUpdateToOneWithWhereWithoutStagesInputSchema';
import { PipelineUpdateWithoutStagesInputSchema } from './PipelineUpdateWithoutStagesInputSchema';
import { PipelineUncheckedUpdateWithoutStagesInputSchema } from './PipelineUncheckedUpdateWithoutStagesInputSchema';

export const PipelineUpdateOneRequiredWithoutStagesNestedInputSchema: z.ZodType<Prisma.PipelineUpdateOneRequiredWithoutStagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineCreateWithoutStagesInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutStagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutStagesInputSchema).optional(),
  upsert: z.lazy(() => PipelineUpsertWithoutStagesInputSchema).optional(),
  connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PipelineUpdateToOneWithWhereWithoutStagesInputSchema),z.lazy(() => PipelineUpdateWithoutStagesInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutStagesInputSchema) ]).optional(),
}).strict();

export default PipelineUpdateOneRequiredWithoutStagesNestedInputSchema;
