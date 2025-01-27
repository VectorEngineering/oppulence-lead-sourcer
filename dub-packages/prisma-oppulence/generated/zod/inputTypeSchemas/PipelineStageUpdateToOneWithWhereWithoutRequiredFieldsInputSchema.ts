import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema';
import { PipelineStageUpdateWithoutRequiredFieldsInputSchema } from './PipelineStageUpdateWithoutRequiredFieldsInputSchema';
import { PipelineStageUncheckedUpdateWithoutRequiredFieldsInputSchema } from './PipelineStageUncheckedUpdateWithoutRequiredFieldsInputSchema';

export const PipelineStageUpdateToOneWithWhereWithoutRequiredFieldsInputSchema: z.ZodType<Prisma.PipelineStageUpdateToOneWithWhereWithoutRequiredFieldsInput> = z.object({
  where: z.lazy(() => PipelineStageWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PipelineStageUpdateWithoutRequiredFieldsInputSchema),z.lazy(() => PipelineStageUncheckedUpdateWithoutRequiredFieldsInputSchema) ]),
}).strict();

export default PipelineStageUpdateToOneWithWhereWithoutRequiredFieldsInputSchema;
