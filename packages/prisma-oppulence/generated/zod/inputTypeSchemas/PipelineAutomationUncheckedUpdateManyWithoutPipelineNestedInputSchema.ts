import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationCreateWithoutPipelineInputSchema } from './PipelineAutomationCreateWithoutPipelineInputSchema';
import { PipelineAutomationUncheckedCreateWithoutPipelineInputSchema } from './PipelineAutomationUncheckedCreateWithoutPipelineInputSchema';
import { PipelineAutomationCreateOrConnectWithoutPipelineInputSchema } from './PipelineAutomationCreateOrConnectWithoutPipelineInputSchema';
import { PipelineAutomationUpsertWithWhereUniqueWithoutPipelineInputSchema } from './PipelineAutomationUpsertWithWhereUniqueWithoutPipelineInputSchema';
import { PipelineAutomationCreateManyPipelineInputEnvelopeSchema } from './PipelineAutomationCreateManyPipelineInputEnvelopeSchema';
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema';
import { PipelineAutomationUpdateWithWhereUniqueWithoutPipelineInputSchema } from './PipelineAutomationUpdateWithWhereUniqueWithoutPipelineInputSchema';
import { PipelineAutomationUpdateManyWithWhereWithoutPipelineInputSchema } from './PipelineAutomationUpdateManyWithWhereWithoutPipelineInputSchema';
import { PipelineAutomationScalarWhereInputSchema } from './PipelineAutomationScalarWhereInputSchema';

export const PipelineAutomationUncheckedUpdateManyWithoutPipelineNestedInputSchema: z.ZodType<Prisma.PipelineAutomationUncheckedUpdateManyWithoutPipelineNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineAutomationCreateWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationCreateWithoutPipelineInputSchema).array(),z.lazy(() => PipelineAutomationUncheckedCreateWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationUncheckedCreateWithoutPipelineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PipelineAutomationCreateOrConnectWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationCreateOrConnectWithoutPipelineInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PipelineAutomationUpsertWithWhereUniqueWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationUpsertWithWhereUniqueWithoutPipelineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PipelineAutomationCreateManyPipelineInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PipelineAutomationWhereUniqueInputSchema),z.lazy(() => PipelineAutomationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PipelineAutomationWhereUniqueInputSchema),z.lazy(() => PipelineAutomationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PipelineAutomationWhereUniqueInputSchema),z.lazy(() => PipelineAutomationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PipelineAutomationWhereUniqueInputSchema),z.lazy(() => PipelineAutomationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PipelineAutomationUpdateWithWhereUniqueWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationUpdateWithWhereUniqueWithoutPipelineInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PipelineAutomationUpdateManyWithWhereWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationUpdateManyWithWhereWithoutPipelineInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PipelineAutomationScalarWhereInputSchema),z.lazy(() => PipelineAutomationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PipelineAutomationUncheckedUpdateManyWithoutPipelineNestedInputSchema;
