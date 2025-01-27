import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineCreateWithoutAutomationsInputSchema } from './PipelineCreateWithoutAutomationsInputSchema';
import { PipelineUncheckedCreateWithoutAutomationsInputSchema } from './PipelineUncheckedCreateWithoutAutomationsInputSchema';

export const PipelineCreateOrConnectWithoutAutomationsInputSchema: z.ZodType<Prisma.PipelineCreateOrConnectWithoutAutomationsInput> = z.object({
  where: z.lazy(() => PipelineWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PipelineCreateWithoutAutomationsInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutAutomationsInputSchema) ]),
}).strict();

export default PipelineCreateOrConnectWithoutAutomationsInputSchema;
