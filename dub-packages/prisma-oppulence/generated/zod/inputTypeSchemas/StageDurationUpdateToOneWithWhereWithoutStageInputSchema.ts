import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StageDurationWhereInputSchema } from './StageDurationWhereInputSchema';
import { StageDurationUpdateWithoutStageInputSchema } from './StageDurationUpdateWithoutStageInputSchema';
import { StageDurationUncheckedUpdateWithoutStageInputSchema } from './StageDurationUncheckedUpdateWithoutStageInputSchema';

export const StageDurationUpdateToOneWithWhereWithoutStageInputSchema: z.ZodType<Prisma.StageDurationUpdateToOneWithWhereWithoutStageInput> = z.object({
  where: z.lazy(() => StageDurationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StageDurationUpdateWithoutStageInputSchema),z.lazy(() => StageDurationUncheckedUpdateWithoutStageInputSchema) ]),
}).strict();

export default StageDurationUpdateToOneWithWhereWithoutStageInputSchema;
