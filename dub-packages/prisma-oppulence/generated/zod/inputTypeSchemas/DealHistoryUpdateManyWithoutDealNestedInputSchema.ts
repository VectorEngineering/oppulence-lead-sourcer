import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealHistoryCreateWithoutDealInputSchema } from './DealHistoryCreateWithoutDealInputSchema';
import { DealHistoryUncheckedCreateWithoutDealInputSchema } from './DealHistoryUncheckedCreateWithoutDealInputSchema';
import { DealHistoryCreateOrConnectWithoutDealInputSchema } from './DealHistoryCreateOrConnectWithoutDealInputSchema';
import { DealHistoryUpsertWithWhereUniqueWithoutDealInputSchema } from './DealHistoryUpsertWithWhereUniqueWithoutDealInputSchema';
import { DealHistoryCreateManyDealInputEnvelopeSchema } from './DealHistoryCreateManyDealInputEnvelopeSchema';
import { DealHistoryWhereUniqueInputSchema } from './DealHistoryWhereUniqueInputSchema';
import { DealHistoryUpdateWithWhereUniqueWithoutDealInputSchema } from './DealHistoryUpdateWithWhereUniqueWithoutDealInputSchema';
import { DealHistoryUpdateManyWithWhereWithoutDealInputSchema } from './DealHistoryUpdateManyWithWhereWithoutDealInputSchema';
import { DealHistoryScalarWhereInputSchema } from './DealHistoryScalarWhereInputSchema';

export const DealHistoryUpdateManyWithoutDealNestedInputSchema: z.ZodType<Prisma.DealHistoryUpdateManyWithoutDealNestedInput> = z.object({
  create: z.union([ z.lazy(() => DealHistoryCreateWithoutDealInputSchema),z.lazy(() => DealHistoryCreateWithoutDealInputSchema).array(),z.lazy(() => DealHistoryUncheckedCreateWithoutDealInputSchema),z.lazy(() => DealHistoryUncheckedCreateWithoutDealInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealHistoryCreateOrConnectWithoutDealInputSchema),z.lazy(() => DealHistoryCreateOrConnectWithoutDealInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DealHistoryUpsertWithWhereUniqueWithoutDealInputSchema),z.lazy(() => DealHistoryUpsertWithWhereUniqueWithoutDealInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DealHistoryCreateManyDealInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DealHistoryWhereUniqueInputSchema),z.lazy(() => DealHistoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DealHistoryWhereUniqueInputSchema),z.lazy(() => DealHistoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DealHistoryWhereUniqueInputSchema),z.lazy(() => DealHistoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DealHistoryWhereUniqueInputSchema),z.lazy(() => DealHistoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DealHistoryUpdateWithWhereUniqueWithoutDealInputSchema),z.lazy(() => DealHistoryUpdateWithWhereUniqueWithoutDealInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DealHistoryUpdateManyWithWhereWithoutDealInputSchema),z.lazy(() => DealHistoryUpdateManyWithWhereWithoutDealInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DealHistoryScalarWhereInputSchema),z.lazy(() => DealHistoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DealHistoryUpdateManyWithoutDealNestedInputSchema;
