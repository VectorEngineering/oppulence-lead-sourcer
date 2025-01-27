import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineUpdateWithoutProjectInputSchema } from './PipelineUpdateWithoutProjectInputSchema';
import { PipelineUncheckedUpdateWithoutProjectInputSchema } from './PipelineUncheckedUpdateWithoutProjectInputSchema';

export const PipelineUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PipelineUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PipelineWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PipelineUpdateWithoutProjectInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default PipelineUpdateWithWhereUniqueWithoutProjectInputSchema;
