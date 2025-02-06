import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleCreateWithoutPayoutInputSchema } from './SaleCreateWithoutPayoutInputSchema';
import { SaleUncheckedCreateWithoutPayoutInputSchema } from './SaleUncheckedCreateWithoutPayoutInputSchema';
import { SaleCreateOrConnectWithoutPayoutInputSchema } from './SaleCreateOrConnectWithoutPayoutInputSchema';
import { SaleUpsertWithWhereUniqueWithoutPayoutInputSchema } from './SaleUpsertWithWhereUniqueWithoutPayoutInputSchema';
import { SaleCreateManyPayoutInputEnvelopeSchema } from './SaleCreateManyPayoutInputEnvelopeSchema';
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema';
import { SaleUpdateWithWhereUniqueWithoutPayoutInputSchema } from './SaleUpdateWithWhereUniqueWithoutPayoutInputSchema';
import { SaleUpdateManyWithWhereWithoutPayoutInputSchema } from './SaleUpdateManyWithWhereWithoutPayoutInputSchema';
import { SaleScalarWhereInputSchema } from './SaleScalarWhereInputSchema';

export const SaleUncheckedUpdateManyWithoutPayoutNestedInputSchema: z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutPayoutNestedInput> = z.object({
  create: z.union([ z.lazy(() => SaleCreateWithoutPayoutInputSchema),z.lazy(() => SaleCreateWithoutPayoutInputSchema).array(),z.lazy(() => SaleUncheckedCreateWithoutPayoutInputSchema),z.lazy(() => SaleUncheckedCreateWithoutPayoutInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SaleCreateOrConnectWithoutPayoutInputSchema),z.lazy(() => SaleCreateOrConnectWithoutPayoutInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SaleUpsertWithWhereUniqueWithoutPayoutInputSchema),z.lazy(() => SaleUpsertWithWhereUniqueWithoutPayoutInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SaleCreateManyPayoutInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SaleUpdateWithWhereUniqueWithoutPayoutInputSchema),z.lazy(() => SaleUpdateWithWhereUniqueWithoutPayoutInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SaleUpdateManyWithWhereWithoutPayoutInputSchema),z.lazy(() => SaleUpdateManyWithWhereWithoutPayoutInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SaleScalarWhereInputSchema),z.lazy(() => SaleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SaleUncheckedUpdateManyWithoutPayoutNestedInputSchema;
