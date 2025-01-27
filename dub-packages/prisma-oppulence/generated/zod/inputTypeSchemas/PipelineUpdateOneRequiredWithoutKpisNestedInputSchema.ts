import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineCreateWithoutKpisInputSchema } from './PipelineCreateWithoutKpisInputSchema';
import { PipelineUncheckedCreateWithoutKpisInputSchema } from './PipelineUncheckedCreateWithoutKpisInputSchema';
import { PipelineCreateOrConnectWithoutKpisInputSchema } from './PipelineCreateOrConnectWithoutKpisInputSchema';
import { PipelineUpsertWithoutKpisInputSchema } from './PipelineUpsertWithoutKpisInputSchema';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineUpdateToOneWithWhereWithoutKpisInputSchema } from './PipelineUpdateToOneWithWhereWithoutKpisInputSchema';
import { PipelineUpdateWithoutKpisInputSchema } from './PipelineUpdateWithoutKpisInputSchema';
import { PipelineUncheckedUpdateWithoutKpisInputSchema } from './PipelineUncheckedUpdateWithoutKpisInputSchema';

export const PipelineUpdateOneRequiredWithoutKpisNestedInputSchema: z.ZodType<Prisma.PipelineUpdateOneRequiredWithoutKpisNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineCreateWithoutKpisInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutKpisInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutKpisInputSchema).optional(),
  upsert: z.lazy(() => PipelineUpsertWithoutKpisInputSchema).optional(),
  connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PipelineUpdateToOneWithWhereWithoutKpisInputSchema),z.lazy(() => PipelineUpdateWithoutKpisInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutKpisInputSchema) ]).optional(),
}).strict();

export default PipelineUpdateOneRequiredWithoutKpisNestedInputSchema;
