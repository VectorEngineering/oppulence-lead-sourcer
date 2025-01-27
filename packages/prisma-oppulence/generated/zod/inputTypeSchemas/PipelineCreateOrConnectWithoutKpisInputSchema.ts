import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineCreateWithoutKpisInputSchema } from './PipelineCreateWithoutKpisInputSchema';
import { PipelineUncheckedCreateWithoutKpisInputSchema } from './PipelineUncheckedCreateWithoutKpisInputSchema';

export const PipelineCreateOrConnectWithoutKpisInputSchema: z.ZodType<Prisma.PipelineCreateOrConnectWithoutKpisInput> = z.object({
  where: z.lazy(() => PipelineWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PipelineCreateWithoutKpisInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutKpisInputSchema) ]),
}).strict();

export default PipelineCreateOrConnectWithoutKpisInputSchema;
