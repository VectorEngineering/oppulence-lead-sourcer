import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineKpiWhereUniqueInputSchema } from './PipelineKpiWhereUniqueInputSchema';
import { PipelineKpiUpdateWithoutPipelineInputSchema } from './PipelineKpiUpdateWithoutPipelineInputSchema';
import { PipelineKpiUncheckedUpdateWithoutPipelineInputSchema } from './PipelineKpiUncheckedUpdateWithoutPipelineInputSchema';

export const PipelineKpiUpdateWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineKpiUpdateWithWhereUniqueWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineKpiWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PipelineKpiUpdateWithoutPipelineInputSchema),z.lazy(() => PipelineKpiUncheckedUpdateWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineKpiUpdateWithWhereUniqueWithoutPipelineInputSchema;
