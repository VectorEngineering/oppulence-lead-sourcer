import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageCreateWithoutPipelineInputSchema } from './PipelineStageCreateWithoutPipelineInputSchema';
import { PipelineStageUncheckedCreateWithoutPipelineInputSchema } from './PipelineStageUncheckedCreateWithoutPipelineInputSchema';
import { PipelineStageCreateOrConnectWithoutPipelineInputSchema } from './PipelineStageCreateOrConnectWithoutPipelineInputSchema';
import { PipelineStageCreateManyPipelineInputEnvelopeSchema } from './PipelineStageCreateManyPipelineInputEnvelopeSchema';
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema';

export const PipelineStageCreateNestedManyWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineStageCreateNestedManyWithoutPipelineInput> = z.object({
  create: z.union([ z.lazy(() => PipelineStageCreateWithoutPipelineInputSchema),z.lazy(() => PipelineStageCreateWithoutPipelineInputSchema).array(),z.lazy(() => PipelineStageUncheckedCreateWithoutPipelineInputSchema),z.lazy(() => PipelineStageUncheckedCreateWithoutPipelineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PipelineStageCreateOrConnectWithoutPipelineInputSchema),z.lazy(() => PipelineStageCreateOrConnectWithoutPipelineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PipelineStageCreateManyPipelineInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PipelineStageWhereUniqueInputSchema),z.lazy(() => PipelineStageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PipelineStageCreateNestedManyWithoutPipelineInputSchema;
