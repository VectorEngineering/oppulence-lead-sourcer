import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';
import { PipelineUpdateWithoutAutomationsInputSchema } from './PipelineUpdateWithoutAutomationsInputSchema';
import { PipelineUncheckedUpdateWithoutAutomationsInputSchema } from './PipelineUncheckedUpdateWithoutAutomationsInputSchema';

export const PipelineUpdateToOneWithWhereWithoutAutomationsInputSchema: z.ZodType<Prisma.PipelineUpdateToOneWithWhereWithoutAutomationsInput> = z.object({
  where: z.lazy(() => PipelineWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PipelineUpdateWithoutAutomationsInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutAutomationsInputSchema) ]),
}).strict();

export default PipelineUpdateToOneWithWhereWithoutAutomationsInputSchema;
