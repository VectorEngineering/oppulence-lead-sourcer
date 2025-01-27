import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutStageInputSchema } from './DealCreateWithoutStageInputSchema';
import { DealUncheckedCreateWithoutStageInputSchema } from './DealUncheckedCreateWithoutStageInputSchema';
import { DealCreateOrConnectWithoutStageInputSchema } from './DealCreateOrConnectWithoutStageInputSchema';
import { DealCreateManyStageInputEnvelopeSchema } from './DealCreateManyStageInputEnvelopeSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';

export const DealCreateNestedManyWithoutStageInputSchema: z.ZodType<Prisma.DealCreateNestedManyWithoutStageInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutStageInputSchema),z.lazy(() => DealCreateWithoutStageInputSchema).array(),z.lazy(() => DealUncheckedCreateWithoutStageInputSchema),z.lazy(() => DealUncheckedCreateWithoutStageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealCreateOrConnectWithoutStageInputSchema),z.lazy(() => DealCreateOrConnectWithoutStageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DealCreateManyStageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DealCreateNestedManyWithoutStageInputSchema;
