import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageCreateWithoutDealsInputSchema } from './PipelineStageCreateWithoutDealsInputSchema';
import { PipelineStageUncheckedCreateWithoutDealsInputSchema } from './PipelineStageUncheckedCreateWithoutDealsInputSchema';
import { PipelineStageCreateOrConnectWithoutDealsInputSchema } from './PipelineStageCreateOrConnectWithoutDealsInputSchema';
import { PipelineStageUpsertWithoutDealsInputSchema } from './PipelineStageUpsertWithoutDealsInputSchema';
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema';
import { PipelineStageUpdateToOneWithWhereWithoutDealsInputSchema } from './PipelineStageUpdateToOneWithWhereWithoutDealsInputSchema';
import { PipelineStageUpdateWithoutDealsInputSchema } from './PipelineStageUpdateWithoutDealsInputSchema';
import { PipelineStageUncheckedUpdateWithoutDealsInputSchema } from './PipelineStageUncheckedUpdateWithoutDealsInputSchema';

export const PipelineStageUpdateOneRequiredWithoutDealsNestedInputSchema: z.ZodType<Prisma.PipelineStageUpdateOneRequiredWithoutDealsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineStageCreateWithoutDealsInputSchema),z.lazy(() => PipelineStageUncheckedCreateWithoutDealsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineStageCreateOrConnectWithoutDealsInputSchema).optional(),
  upsert: z.lazy(() => PipelineStageUpsertWithoutDealsInputSchema).optional(),
  connect: z.lazy(() => PipelineStageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PipelineStageUpdateToOneWithWhereWithoutDealsInputSchema),z.lazy(() => PipelineStageUpdateWithoutDealsInputSchema),z.lazy(() => PipelineStageUncheckedUpdateWithoutDealsInputSchema) ]).optional(),
}).strict();

export default PipelineStageUpdateOneRequiredWithoutDealsNestedInputSchema;
