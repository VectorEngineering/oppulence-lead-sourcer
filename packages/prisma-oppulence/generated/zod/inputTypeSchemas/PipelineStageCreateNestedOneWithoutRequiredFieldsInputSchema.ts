import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageCreateWithoutRequiredFieldsInputSchema } from './PipelineStageCreateWithoutRequiredFieldsInputSchema';
import { PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema } from './PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema';
import { PipelineStageCreateOrConnectWithoutRequiredFieldsInputSchema } from './PipelineStageCreateOrConnectWithoutRequiredFieldsInputSchema';
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema';

export const PipelineStageCreateNestedOneWithoutRequiredFieldsInputSchema: z.ZodType<Prisma.PipelineStageCreateNestedOneWithoutRequiredFieldsInput> = z.object({
  create: z.union([ z.lazy(() => PipelineStageCreateWithoutRequiredFieldsInputSchema),z.lazy(() => PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineStageCreateOrConnectWithoutRequiredFieldsInputSchema).optional(),
  connect: z.lazy(() => PipelineStageWhereUniqueInputSchema).optional()
}).strict();

export default PipelineStageCreateNestedOneWithoutRequiredFieldsInputSchema;
