import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StageDurationScalarWhereInputSchema } from './StageDurationScalarWhereInputSchema';
import { StageDurationUpdateManyMutationInputSchema } from './StageDurationUpdateManyMutationInputSchema';
import { StageDurationUncheckedUpdateManyWithoutPipelineInputSchema } from './StageDurationUncheckedUpdateManyWithoutPipelineInputSchema';

export const StageDurationUpdateManyWithWhereWithoutPipelineInputSchema: z.ZodType<Prisma.StageDurationUpdateManyWithWhereWithoutPipelineInput> = z.object({
  where: z.lazy(() => StageDurationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StageDurationUpdateManyMutationInputSchema),z.lazy(() => StageDurationUncheckedUpdateManyWithoutPipelineInputSchema) ]),
}).strict();

export default StageDurationUpdateManyWithWhereWithoutPipelineInputSchema;
