import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineUpdateWithoutStagesInputSchema } from './PipelineUpdateWithoutStagesInputSchema';
import { PipelineUncheckedUpdateWithoutStagesInputSchema } from './PipelineUncheckedUpdateWithoutStagesInputSchema';
import { PipelineCreateWithoutStagesInputSchema } from './PipelineCreateWithoutStagesInputSchema';
import { PipelineUncheckedCreateWithoutStagesInputSchema } from './PipelineUncheckedCreateWithoutStagesInputSchema';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';

export const PipelineUpsertWithoutStagesInputSchema: z.ZodType<Prisma.PipelineUpsertWithoutStagesInput> = z.object({
  update: z.union([ z.lazy(() => PipelineUpdateWithoutStagesInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutStagesInputSchema) ]),
  create: z.union([ z.lazy(() => PipelineCreateWithoutStagesInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutStagesInputSchema) ]),
  where: z.lazy(() => PipelineWhereInputSchema).optional()
}).strict();

export default PipelineUpsertWithoutStagesInputSchema;
