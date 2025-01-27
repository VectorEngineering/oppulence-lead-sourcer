import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationCreateWithoutPipelineInputSchema } from './PipelineAutomationCreateWithoutPipelineInputSchema';
import { PipelineAutomationUncheckedCreateWithoutPipelineInputSchema } from './PipelineAutomationUncheckedCreateWithoutPipelineInputSchema';
import { PipelineAutomationCreateOrConnectWithoutPipelineInputSchema } from './PipelineAutomationCreateOrConnectWithoutPipelineInputSchema';
import { PipelineAutomationCreateManyPipelineInputEnvelopeSchema } from './PipelineAutomationCreateManyPipelineInputEnvelopeSchema';
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema';

export const PipelineAutomationCreateNestedManyWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAutomationCreateNestedManyWithoutPipelineInput> = z.object({
  create: z.union([ z.lazy(() => PipelineAutomationCreateWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationCreateWithoutPipelineInputSchema).array(),z.lazy(() => PipelineAutomationUncheckedCreateWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationUncheckedCreateWithoutPipelineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PipelineAutomationCreateOrConnectWithoutPipelineInputSchema),z.lazy(() => PipelineAutomationCreateOrConnectWithoutPipelineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PipelineAutomationCreateManyPipelineInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PipelineAutomationWhereUniqueInputSchema),z.lazy(() => PipelineAutomationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PipelineAutomationCreateNestedManyWithoutPipelineInputSchema;
