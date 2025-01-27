import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StageDurationWhereUniqueInputSchema } from './StageDurationWhereUniqueInputSchema';
import { StageDurationUpdateWithoutPipelineInputSchema } from './StageDurationUpdateWithoutPipelineInputSchema';
import { StageDurationUncheckedUpdateWithoutPipelineInputSchema } from './StageDurationUncheckedUpdateWithoutPipelineInputSchema';

export const StageDurationUpdateWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.StageDurationUpdateWithWhereUniqueWithoutPipelineInput> = z.object({
  where: z.lazy(() => StageDurationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StageDurationUpdateWithoutPipelineInputSchema),z.lazy(() => StageDurationUncheckedUpdateWithoutPipelineInputSchema) ]),
}).strict();

export default StageDurationUpdateWithWhereUniqueWithoutPipelineInputSchema;
