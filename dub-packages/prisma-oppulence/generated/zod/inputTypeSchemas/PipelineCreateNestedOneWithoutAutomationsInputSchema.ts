import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineCreateWithoutAutomationsInputSchema } from './PipelineCreateWithoutAutomationsInputSchema';
import { PipelineUncheckedCreateWithoutAutomationsInputSchema } from './PipelineUncheckedCreateWithoutAutomationsInputSchema';
import { PipelineCreateOrConnectWithoutAutomationsInputSchema } from './PipelineCreateOrConnectWithoutAutomationsInputSchema';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';

export const PipelineCreateNestedOneWithoutAutomationsInputSchema: z.ZodType<Prisma.PipelineCreateNestedOneWithoutAutomationsInput> = z.object({
  create: z.union([ z.lazy(() => PipelineCreateWithoutAutomationsInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutAutomationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutAutomationsInputSchema).optional(),
  connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional()
}).strict();

export default PipelineCreateNestedOneWithoutAutomationsInputSchema;
