import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineKpiScalarWhereInputSchema } from './PipelineKpiScalarWhereInputSchema';
import { PipelineKpiUpdateManyMutationInputSchema } from './PipelineKpiUpdateManyMutationInputSchema';
import { PipelineKpiUncheckedUpdateManyWithoutPipelineInputSchema } from './PipelineKpiUncheckedUpdateManyWithoutPipelineInputSchema';

export const PipelineKpiUpdateManyWithWhereWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineKpiUpdateManyWithWhereWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineKpiScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PipelineKpiUpdateManyMutationInputSchema),z.lazy(() => PipelineKpiUncheckedUpdateManyWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineKpiUpdateManyWithWhereWithoutPipelineInputSchema;
