import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineIntegrationWhereUniqueInputSchema } from './PipelineIntegrationWhereUniqueInputSchema';
import { PipelineIntegrationUpdateWithoutPipelineInputSchema } from './PipelineIntegrationUpdateWithoutPipelineInputSchema';
import { PipelineIntegrationUncheckedUpdateWithoutPipelineInputSchema } from './PipelineIntegrationUncheckedUpdateWithoutPipelineInputSchema';
import { PipelineIntegrationCreateWithoutPipelineInputSchema } from './PipelineIntegrationCreateWithoutPipelineInputSchema';
import { PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema } from './PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema';

export const PipelineIntegrationUpsertWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineIntegrationUpsertWithWhereUniqueWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineIntegrationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PipelineIntegrationUpdateWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationUncheckedUpdateWithoutPipelineInputSchema) ]),
  create: z.union([ z.lazy(() => PipelineIntegrationCreateWithoutPipelineInputSchema),z.lazy(() => PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineIntegrationUpsertWithWhereUniqueWithoutPipelineInputSchema;
