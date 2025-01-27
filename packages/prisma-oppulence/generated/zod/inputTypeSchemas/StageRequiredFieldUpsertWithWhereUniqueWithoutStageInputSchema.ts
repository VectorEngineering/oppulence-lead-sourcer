import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StageRequiredFieldWhereUniqueInputSchema } from './StageRequiredFieldWhereUniqueInputSchema';
import { StageRequiredFieldUpdateWithoutStageInputSchema } from './StageRequiredFieldUpdateWithoutStageInputSchema';
import { StageRequiredFieldUncheckedUpdateWithoutStageInputSchema } from './StageRequiredFieldUncheckedUpdateWithoutStageInputSchema';
import { StageRequiredFieldCreateWithoutStageInputSchema } from './StageRequiredFieldCreateWithoutStageInputSchema';
import { StageRequiredFieldUncheckedCreateWithoutStageInputSchema } from './StageRequiredFieldUncheckedCreateWithoutStageInputSchema';

export const StageRequiredFieldUpsertWithWhereUniqueWithoutStageInputSchema: z.ZodType<Prisma.StageRequiredFieldUpsertWithWhereUniqueWithoutStageInput> = z.object({
  where: z.lazy(() => StageRequiredFieldWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StageRequiredFieldUpdateWithoutStageInputSchema),z.lazy(() => StageRequiredFieldUncheckedUpdateWithoutStageInputSchema) ]),
  create: z.union([ z.lazy(() => StageRequiredFieldCreateWithoutStageInputSchema),z.lazy(() => StageRequiredFieldUncheckedCreateWithoutStageInputSchema) ]),
}).strict();

export default StageRequiredFieldUpsertWithWhereUniqueWithoutStageInputSchema;
