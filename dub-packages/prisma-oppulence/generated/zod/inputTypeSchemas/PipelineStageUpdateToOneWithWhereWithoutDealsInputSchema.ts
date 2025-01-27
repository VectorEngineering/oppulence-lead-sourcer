import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema';
import { PipelineStageUpdateWithoutDealsInputSchema } from './PipelineStageUpdateWithoutDealsInputSchema';
import { PipelineStageUncheckedUpdateWithoutDealsInputSchema } from './PipelineStageUncheckedUpdateWithoutDealsInputSchema';

export const PipelineStageUpdateToOneWithWhereWithoutDealsInputSchema: z.ZodType<Prisma.PipelineStageUpdateToOneWithWhereWithoutDealsInput> = z.object({
  where: z.lazy(() => PipelineStageWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PipelineStageUpdateWithoutDealsInputSchema),z.lazy(() => PipelineStageUncheckedUpdateWithoutDealsInputSchema) ]),
}).strict();

export default PipelineStageUpdateToOneWithWhereWithoutDealsInputSchema;
