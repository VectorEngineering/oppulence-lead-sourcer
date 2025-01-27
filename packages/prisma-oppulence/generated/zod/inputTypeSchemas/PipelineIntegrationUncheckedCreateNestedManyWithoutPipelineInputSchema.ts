import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineIntegrationCreateWithoutPipelineInputSchema } from './PipelineIntegrationCreateWithoutPipelineInputSchema';
import { PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema } from './PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema';
import { PipelineIntegrationCreateOrConnectWithoutPipelineInputSchema } from './PipelineIntegrationCreateOrConnectWithoutPipelineInputSchema';
import { PipelineIntegrationCreateManyPipelineInputEnvelopeSchema } from './PipelineIntegrationCreateManyPipelineInputEnvelopeSchema';
import { PipelineIntegrationWhereUniqueInputSchema } from './PipelineIntegrationWhereUniqueInputSchema';

export const PipelineIntegrationUncheckedCreateNestedManyWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineIntegrationUncheckedCreateNestedManyWithoutPipelineInput> = z.object({
  create: z.union([ z.lazy(() => PipelineIntegrationCreateWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationCreateWithoutPipelineInputSchema).array(),z.lazy(() => PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PipelineIntegrationCreateOrConnectWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationCreateOrConnectWithoutPipelineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PipelineIntegrationCreateManyPipelineInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PipelineIntegrationWhereUniqueInputSchema),z.lazy(() => PipelineIntegrationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PipelineIntegrationUncheckedCreateNestedManyWithoutPipelineInputSchema;
