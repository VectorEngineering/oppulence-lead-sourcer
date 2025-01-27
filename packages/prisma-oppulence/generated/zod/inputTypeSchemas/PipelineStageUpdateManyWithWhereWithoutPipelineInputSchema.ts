import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageScalarWhereInputSchema } from './PipelineStageScalarWhereInputSchema';
import { PipelineStageUpdateManyMutationInputSchema } from './PipelineStageUpdateManyMutationInputSchema';
import { PipelineStageUncheckedUpdateManyWithoutPipelineInputSchema } from './PipelineStageUncheckedUpdateManyWithoutPipelineInputSchema';

export const PipelineStageUpdateManyWithWhereWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineStageUpdateManyWithWhereWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineStageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PipelineStageUpdateManyMutationInputSchema),z.lazy(() => PipelineStageUncheckedUpdateManyWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineStageUpdateManyWithWhereWithoutPipelineInputSchema;
