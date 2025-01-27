import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineScalarWhereInputSchema } from './PipelineScalarWhereInputSchema';
import { PipelineUpdateManyMutationInputSchema } from './PipelineUpdateManyMutationInputSchema';
import { PipelineUncheckedUpdateManyWithoutProjectInputSchema } from './PipelineUncheckedUpdateManyWithoutProjectInputSchema';

export const PipelineUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.PipelineUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => PipelineScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PipelineUpdateManyMutationInputSchema),z.lazy(() => PipelineUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default PipelineUpdateManyWithWhereWithoutProjectInputSchema;
