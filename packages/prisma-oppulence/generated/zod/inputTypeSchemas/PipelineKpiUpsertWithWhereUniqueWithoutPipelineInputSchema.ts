import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineKpiWhereUniqueInputSchema } from './PipelineKpiWhereUniqueInputSchema';
import { PipelineKpiUpdateWithoutPipelineInputSchema } from './PipelineKpiUpdateWithoutPipelineInputSchema';
import { PipelineKpiUncheckedUpdateWithoutPipelineInputSchema } from './PipelineKpiUncheckedUpdateWithoutPipelineInputSchema';
import { PipelineKpiCreateWithoutPipelineInputSchema } from './PipelineKpiCreateWithoutPipelineInputSchema';
import { PipelineKpiUncheckedCreateWithoutPipelineInputSchema } from './PipelineKpiUncheckedCreateWithoutPipelineInputSchema';

export const PipelineKpiUpsertWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineKpiUpsertWithWhereUniqueWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineKpiWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PipelineKpiUpdateWithoutPipelineInputSchema),z.lazy(() => PipelineKpiUncheckedUpdateWithoutPipelineInputSchema) ]),
  create: z.union([ z.lazy(() => PipelineKpiCreateWithoutPipelineInputSchema),z.lazy(() => PipelineKpiUncheckedCreateWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineKpiUpsertWithWhereUniqueWithoutPipelineInputSchema;
