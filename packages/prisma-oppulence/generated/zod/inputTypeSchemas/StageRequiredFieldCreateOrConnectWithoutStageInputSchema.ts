import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StageRequiredFieldWhereUniqueInputSchema } from './StageRequiredFieldWhereUniqueInputSchema';
import { StageRequiredFieldCreateWithoutStageInputSchema } from './StageRequiredFieldCreateWithoutStageInputSchema';
import { StageRequiredFieldUncheckedCreateWithoutStageInputSchema } from './StageRequiredFieldUncheckedCreateWithoutStageInputSchema';

export const StageRequiredFieldCreateOrConnectWithoutStageInputSchema: z.ZodType<Prisma.StageRequiredFieldCreateOrConnectWithoutStageInput> = z.object({
  where: z.lazy(() => StageRequiredFieldWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StageRequiredFieldCreateWithoutStageInputSchema),z.lazy(() => StageRequiredFieldUncheckedCreateWithoutStageInputSchema) ]),
}).strict();

export default StageRequiredFieldCreateOrConnectWithoutStageInputSchema;
