import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineCreateWithoutDealsInputSchema } from './PipelineCreateWithoutDealsInputSchema';
import { PipelineUncheckedCreateWithoutDealsInputSchema } from './PipelineUncheckedCreateWithoutDealsInputSchema';

export const PipelineCreateOrConnectWithoutDealsInputSchema: z.ZodType<Prisma.PipelineCreateOrConnectWithoutDealsInput> = z.object({
  where: z.lazy(() => PipelineWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PipelineCreateWithoutDealsInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutDealsInputSchema) ]),
}).strict();

export default PipelineCreateOrConnectWithoutDealsInputSchema;
