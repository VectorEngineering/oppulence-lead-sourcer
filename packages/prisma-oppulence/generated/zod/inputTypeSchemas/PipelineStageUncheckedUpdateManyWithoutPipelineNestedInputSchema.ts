import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageCreateWithoutPipelineInputSchema } from './PipelineStageCreateWithoutPipelineInputSchema';
import { PipelineStageUncheckedCreateWithoutPipelineInputSchema } from './PipelineStageUncheckedCreateWithoutPipelineInputSchema';
import { PipelineStageCreateOrConnectWithoutPipelineInputSchema } from './PipelineStageCreateOrConnectWithoutPipelineInputSchema';
import { PipelineStageUpsertWithWhereUniqueWithoutPipelineInputSchema } from './PipelineStageUpsertWithWhereUniqueWithoutPipelineInputSchema';
import { PipelineStageCreateManyPipelineInputEnvelopeSchema } from './PipelineStageCreateManyPipelineInputEnvelopeSchema';
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema';
import { PipelineStageUpdateWithWhereUniqueWithoutPipelineInputSchema } from './PipelineStageUpdateWithWhereUniqueWithoutPipelineInputSchema';
import { PipelineStageUpdateManyWithWhereWithoutPipelineInputSchema } from './PipelineStageUpdateManyWithWhereWithoutPipelineInputSchema';
import { PipelineStageScalarWhereInputSchema } from './PipelineStageScalarWhereInputSchema';

export const PipelineStageUncheckedUpdateManyWithoutPipelineNestedInputSchema: z.ZodType<Prisma.PipelineStageUncheckedUpdateManyWithoutPipelineNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineStageCreateWithoutPipelineInputSchema),z.lazy(() => PipelineStageCreateWithoutPipelineInputSchema).array(),z.lazy(() => PipelineStageUncheckedCreateWithoutPipelineInputSchema),z.lazy(() => PipelineStageUncheckedCreateWithoutPipelineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PipelineStageCreateOrConnectWithoutPipelineInputSchema),z.lazy(() => PipelineStageCreateOrConnectWithoutPipelineInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PipelineStageUpsertWithWhereUniqueWithoutPipelineInputSchema),z.lazy(() => PipelineStageUpsertWithWhereUniqueWithoutPipelineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PipelineStageCreateManyPipelineInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PipelineStageWhereUniqueInputSchema),z.lazy(() => PipelineStageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PipelineStageWhereUniqueInputSchema),z.lazy(() => PipelineStageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PipelineStageWhereUniqueInputSchema),z.lazy(() => PipelineStageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PipelineStageWhereUniqueInputSchema),z.lazy(() => PipelineStageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PipelineStageUpdateWithWhereUniqueWithoutPipelineInputSchema),z.lazy(() => PipelineStageUpdateWithWhereUniqueWithoutPipelineInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PipelineStageUpdateManyWithWhereWithoutPipelineInputSchema),z.lazy(() => PipelineStageUpdateManyWithWhereWithoutPipelineInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PipelineStageScalarWhereInputSchema),z.lazy(() => PipelineStageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PipelineStageUncheckedUpdateManyWithoutPipelineNestedInputSchema;
