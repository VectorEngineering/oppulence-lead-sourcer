import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineIntegrationCreateWithoutPipelineInputSchema } from './PipelineIntegrationCreateWithoutPipelineInputSchema';
import { PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema } from './PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema';
import { PipelineIntegrationCreateOrConnectWithoutPipelineInputSchema } from './PipelineIntegrationCreateOrConnectWithoutPipelineInputSchema';
import { PipelineIntegrationUpsertWithWhereUniqueWithoutPipelineInputSchema } from './PipelineIntegrationUpsertWithWhereUniqueWithoutPipelineInputSchema';
import { PipelineIntegrationCreateManyPipelineInputEnvelopeSchema } from './PipelineIntegrationCreateManyPipelineInputEnvelopeSchema';
import { PipelineIntegrationWhereUniqueInputSchema } from './PipelineIntegrationWhereUniqueInputSchema';
import { PipelineIntegrationUpdateWithWhereUniqueWithoutPipelineInputSchema } from './PipelineIntegrationUpdateWithWhereUniqueWithoutPipelineInputSchema';
import { PipelineIntegrationUpdateManyWithWhereWithoutPipelineInputSchema } from './PipelineIntegrationUpdateManyWithWhereWithoutPipelineInputSchema';
import { PipelineIntegrationScalarWhereInputSchema } from './PipelineIntegrationScalarWhereInputSchema';

export const PipelineIntegrationUncheckedUpdateManyWithoutPipelineNestedInputSchema: z.ZodType<Prisma.PipelineIntegrationUncheckedUpdateManyWithoutPipelineNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineIntegrationCreateWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationCreateWithoutPipelineInputSchema).array(),z.lazy(() => PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PipelineIntegrationCreateOrConnectWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationCreateOrConnectWithoutPipelineInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PipelineIntegrationUpsertWithWhereUniqueWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationUpsertWithWhereUniqueWithoutPipelineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PipelineIntegrationCreateManyPipelineInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PipelineIntegrationWhereUniqueInputSchema),z.lazy(() => PipelineIntegrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PipelineIntegrationWhereUniqueInputSchema),z.lazy(() => PipelineIntegrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PipelineIntegrationWhereUniqueInputSchema),z.lazy(() => PipelineIntegrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PipelineIntegrationWhereUniqueInputSchema),z.lazy(() => PipelineIntegrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PipelineIntegrationUpdateWithWhereUniqueWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationUpdateWithWhereUniqueWithoutPipelineInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PipelineIntegrationUpdateManyWithWhereWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationUpdateManyWithWhereWithoutPipelineInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PipelineIntegrationScalarWhereInputSchema),z.lazy(() => PipelineIntegrationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PipelineIntegrationUncheckedUpdateManyWithoutPipelineNestedInputSchema;
