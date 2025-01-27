import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StageRequiredFieldCreateWithoutStageInputSchema } from './StageRequiredFieldCreateWithoutStageInputSchema';
import { StageRequiredFieldUncheckedCreateWithoutStageInputSchema } from './StageRequiredFieldUncheckedCreateWithoutStageInputSchema';
import { StageRequiredFieldCreateOrConnectWithoutStageInputSchema } from './StageRequiredFieldCreateOrConnectWithoutStageInputSchema';
import { StageRequiredFieldCreateManyStageInputEnvelopeSchema } from './StageRequiredFieldCreateManyStageInputEnvelopeSchema';
import { StageRequiredFieldWhereUniqueInputSchema } from './StageRequiredFieldWhereUniqueInputSchema';

export const StageRequiredFieldUncheckedCreateNestedManyWithoutStageInputSchema: z.ZodType<Prisma.StageRequiredFieldUncheckedCreateNestedManyWithoutStageInput> = z.object({
  create: z.union([ z.lazy(() => StageRequiredFieldCreateWithoutStageInputSchema),z.lazy(() => StageRequiredFieldCreateWithoutStageInputSchema).array(),z.lazy(() => StageRequiredFieldUncheckedCreateWithoutStageInputSchema),z.lazy(() => StageRequiredFieldUncheckedCreateWithoutStageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StageRequiredFieldCreateOrConnectWithoutStageInputSchema),z.lazy(() => StageRequiredFieldCreateOrConnectWithoutStageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StageRequiredFieldCreateManyStageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StageRequiredFieldWhereUniqueInputSchema),z.lazy(() => StageRequiredFieldWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default StageRequiredFieldUncheckedCreateNestedManyWithoutStageInputSchema;
