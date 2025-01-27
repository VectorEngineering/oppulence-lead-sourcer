import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineCreateWithoutDealsInputSchema } from './PipelineCreateWithoutDealsInputSchema';
import { PipelineUncheckedCreateWithoutDealsInputSchema } from './PipelineUncheckedCreateWithoutDealsInputSchema';
import { PipelineCreateOrConnectWithoutDealsInputSchema } from './PipelineCreateOrConnectWithoutDealsInputSchema';
import { PipelineUpsertWithoutDealsInputSchema } from './PipelineUpsertWithoutDealsInputSchema';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineUpdateToOneWithWhereWithoutDealsInputSchema } from './PipelineUpdateToOneWithWhereWithoutDealsInputSchema';
import { PipelineUpdateWithoutDealsInputSchema } from './PipelineUpdateWithoutDealsInputSchema';
import { PipelineUncheckedUpdateWithoutDealsInputSchema } from './PipelineUncheckedUpdateWithoutDealsInputSchema';

export const PipelineUpdateOneRequiredWithoutDealsNestedInputSchema: z.ZodType<Prisma.PipelineUpdateOneRequiredWithoutDealsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineCreateWithoutDealsInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutDealsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutDealsInputSchema).optional(),
  upsert: z.lazy(() => PipelineUpsertWithoutDealsInputSchema).optional(),
  connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PipelineUpdateToOneWithWhereWithoutDealsInputSchema),z.lazy(() => PipelineUpdateWithoutDealsInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutDealsInputSchema) ]).optional(),
}).strict();

export default PipelineUpdateOneRequiredWithoutDealsNestedInputSchema;
