import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealUpdateWithoutStageInputSchema } from './DealUpdateWithoutStageInputSchema';
import { DealUncheckedUpdateWithoutStageInputSchema } from './DealUncheckedUpdateWithoutStageInputSchema';
import { DealCreateWithoutStageInputSchema } from './DealCreateWithoutStageInputSchema';
import { DealUncheckedCreateWithoutStageInputSchema } from './DealUncheckedCreateWithoutStageInputSchema';

export const DealUpsertWithWhereUniqueWithoutStageInputSchema: z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutStageInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DealUpdateWithoutStageInputSchema),z.lazy(() => DealUncheckedUpdateWithoutStageInputSchema) ]),
  create: z.union([ z.lazy(() => DealCreateWithoutStageInputSchema),z.lazy(() => DealUncheckedCreateWithoutStageInputSchema) ]),
}).strict();

export default DealUpsertWithWhereUniqueWithoutStageInputSchema;
