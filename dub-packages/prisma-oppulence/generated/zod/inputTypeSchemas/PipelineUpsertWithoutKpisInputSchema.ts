import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineUpdateWithoutKpisInputSchema } from './PipelineUpdateWithoutKpisInputSchema';
import { PipelineUncheckedUpdateWithoutKpisInputSchema } from './PipelineUncheckedUpdateWithoutKpisInputSchema';
import { PipelineCreateWithoutKpisInputSchema } from './PipelineCreateWithoutKpisInputSchema';
import { PipelineUncheckedCreateWithoutKpisInputSchema } from './PipelineUncheckedCreateWithoutKpisInputSchema';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';

export const PipelineUpsertWithoutKpisInputSchema: z.ZodType<Prisma.PipelineUpsertWithoutKpisInput> = z.object({
  update: z.union([ z.lazy(() => PipelineUpdateWithoutKpisInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutKpisInputSchema) ]),
  create: z.union([ z.lazy(() => PipelineCreateWithoutKpisInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutKpisInputSchema) ]),
  where: z.lazy(() => PipelineWhereInputSchema).optional()
}).strict();

export default PipelineUpsertWithoutKpisInputSchema;
