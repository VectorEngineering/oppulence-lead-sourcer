import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema';
import { PipelineStageCreateWithoutDealsInputSchema } from './PipelineStageCreateWithoutDealsInputSchema';
import { PipelineStageUncheckedCreateWithoutDealsInputSchema } from './PipelineStageUncheckedCreateWithoutDealsInputSchema';

export const PipelineStageCreateOrConnectWithoutDealsInputSchema: z.ZodType<Prisma.PipelineStageCreateOrConnectWithoutDealsInput> = z.object({
  where: z.lazy(() => PipelineStageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PipelineStageCreateWithoutDealsInputSchema),z.lazy(() => PipelineStageUncheckedCreateWithoutDealsInputSchema) ]),
}).strict();

export default PipelineStageCreateOrConnectWithoutDealsInputSchema;
