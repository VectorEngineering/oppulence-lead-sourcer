import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutStageInputSchema } from './DealCreateWithoutStageInputSchema';
import { DealUncheckedCreateWithoutStageInputSchema } from './DealUncheckedCreateWithoutStageInputSchema';
import { DealCreateOrConnectWithoutStageInputSchema } from './DealCreateOrConnectWithoutStageInputSchema';
import { DealUpsertWithWhereUniqueWithoutStageInputSchema } from './DealUpsertWithWhereUniqueWithoutStageInputSchema';
import { DealCreateManyStageInputEnvelopeSchema } from './DealCreateManyStageInputEnvelopeSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealUpdateWithWhereUniqueWithoutStageInputSchema } from './DealUpdateWithWhereUniqueWithoutStageInputSchema';
import { DealUpdateManyWithWhereWithoutStageInputSchema } from './DealUpdateManyWithWhereWithoutStageInputSchema';
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema';

export const DealUncheckedUpdateManyWithoutStageNestedInputSchema: z.ZodType<Prisma.DealUncheckedUpdateManyWithoutStageNestedInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutStageInputSchema),z.lazy(() => DealCreateWithoutStageInputSchema).array(),z.lazy(() => DealUncheckedCreateWithoutStageInputSchema),z.lazy(() => DealUncheckedCreateWithoutStageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealCreateOrConnectWithoutStageInputSchema),z.lazy(() => DealCreateOrConnectWithoutStageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DealUpsertWithWhereUniqueWithoutStageInputSchema),z.lazy(() => DealUpsertWithWhereUniqueWithoutStageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DealCreateManyStageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DealUpdateWithWhereUniqueWithoutStageInputSchema),z.lazy(() => DealUpdateWithWhereUniqueWithoutStageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DealUpdateManyWithWhereWithoutStageInputSchema),z.lazy(() => DealUpdateManyWithWhereWithoutStageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DealScalarWhereInputSchema),z.lazy(() => DealScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DealUncheckedUpdateManyWithoutStageNestedInputSchema;
