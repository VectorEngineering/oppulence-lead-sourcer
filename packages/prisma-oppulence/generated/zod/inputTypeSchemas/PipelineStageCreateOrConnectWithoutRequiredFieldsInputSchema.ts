import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema';
import { PipelineStageCreateWithoutRequiredFieldsInputSchema } from './PipelineStageCreateWithoutRequiredFieldsInputSchema';
import { PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema } from './PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema';

export const PipelineStageCreateOrConnectWithoutRequiredFieldsInputSchema: z.ZodType<Prisma.PipelineStageCreateOrConnectWithoutRequiredFieldsInput> = z.object({
  where: z.lazy(() => PipelineStageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PipelineStageCreateWithoutRequiredFieldsInputSchema),z.lazy(() => PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema) ]),
}).strict();

export default PipelineStageCreateOrConnectWithoutRequiredFieldsInputSchema;
