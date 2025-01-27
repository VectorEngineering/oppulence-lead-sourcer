import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealProductCreateWithoutDealInputSchema } from './DealProductCreateWithoutDealInputSchema';
import { DealProductUncheckedCreateWithoutDealInputSchema } from './DealProductUncheckedCreateWithoutDealInputSchema';
import { DealProductCreateOrConnectWithoutDealInputSchema } from './DealProductCreateOrConnectWithoutDealInputSchema';
import { DealProductUpsertWithWhereUniqueWithoutDealInputSchema } from './DealProductUpsertWithWhereUniqueWithoutDealInputSchema';
import { DealProductCreateManyDealInputEnvelopeSchema } from './DealProductCreateManyDealInputEnvelopeSchema';
import { DealProductWhereUniqueInputSchema } from './DealProductWhereUniqueInputSchema';
import { DealProductUpdateWithWhereUniqueWithoutDealInputSchema } from './DealProductUpdateWithWhereUniqueWithoutDealInputSchema';
import { DealProductUpdateManyWithWhereWithoutDealInputSchema } from './DealProductUpdateManyWithWhereWithoutDealInputSchema';
import { DealProductScalarWhereInputSchema } from './DealProductScalarWhereInputSchema';

export const DealProductUpdateManyWithoutDealNestedInputSchema: z.ZodType<Prisma.DealProductUpdateManyWithoutDealNestedInput> = z.object({
  create: z.union([ z.lazy(() => DealProductCreateWithoutDealInputSchema),z.lazy(() => DealProductCreateWithoutDealInputSchema).array(),z.lazy(() => DealProductUncheckedCreateWithoutDealInputSchema),z.lazy(() => DealProductUncheckedCreateWithoutDealInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealProductCreateOrConnectWithoutDealInputSchema),z.lazy(() => DealProductCreateOrConnectWithoutDealInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DealProductUpsertWithWhereUniqueWithoutDealInputSchema),z.lazy(() => DealProductUpsertWithWhereUniqueWithoutDealInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DealProductCreateManyDealInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DealProductWhereUniqueInputSchema),z.lazy(() => DealProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DealProductWhereUniqueInputSchema),z.lazy(() => DealProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DealProductWhereUniqueInputSchema),z.lazy(() => DealProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DealProductWhereUniqueInputSchema),z.lazy(() => DealProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DealProductUpdateWithWhereUniqueWithoutDealInputSchema),z.lazy(() => DealProductUpdateWithWhereUniqueWithoutDealInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DealProductUpdateManyWithWhereWithoutDealInputSchema),z.lazy(() => DealProductUpdateManyWithWhereWithoutDealInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DealProductScalarWhereInputSchema),z.lazy(() => DealProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DealProductUpdateManyWithoutDealNestedInputSchema;
