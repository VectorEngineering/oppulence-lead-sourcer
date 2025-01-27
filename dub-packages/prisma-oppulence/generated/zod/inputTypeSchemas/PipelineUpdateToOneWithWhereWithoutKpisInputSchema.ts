import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';
import { PipelineUpdateWithoutKpisInputSchema } from './PipelineUpdateWithoutKpisInputSchema';
import { PipelineUncheckedUpdateWithoutKpisInputSchema } from './PipelineUncheckedUpdateWithoutKpisInputSchema';

export const PipelineUpdateToOneWithWhereWithoutKpisInputSchema: z.ZodType<Prisma.PipelineUpdateToOneWithWhereWithoutKpisInput> = z.object({
  where: z.lazy(() => PipelineWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PipelineUpdateWithoutKpisInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutKpisInputSchema) ]),
}).strict();

export default PipelineUpdateToOneWithWhereWithoutKpisInputSchema;
