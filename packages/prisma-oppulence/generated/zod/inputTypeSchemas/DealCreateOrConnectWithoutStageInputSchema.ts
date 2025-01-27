import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealCreateWithoutStageInputSchema } from './DealCreateWithoutStageInputSchema';
import { DealUncheckedCreateWithoutStageInputSchema } from './DealUncheckedCreateWithoutStageInputSchema';

export const DealCreateOrConnectWithoutStageInputSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutStageInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DealCreateWithoutStageInputSchema),z.lazy(() => DealUncheckedCreateWithoutStageInputSchema) ]),
}).strict();

export default DealCreateOrConnectWithoutStageInputSchema;
