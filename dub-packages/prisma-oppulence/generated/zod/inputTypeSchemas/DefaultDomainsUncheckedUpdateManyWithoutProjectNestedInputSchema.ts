import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefaultDomainsCreateWithoutProjectInputSchema } from './DefaultDomainsCreateWithoutProjectInputSchema';
import { DefaultDomainsUncheckedCreateWithoutProjectInputSchema } from './DefaultDomainsUncheckedCreateWithoutProjectInputSchema';
import { DefaultDomainsCreateOrConnectWithoutProjectInputSchema } from './DefaultDomainsCreateOrConnectWithoutProjectInputSchema';
import { DefaultDomainsUpsertWithWhereUniqueWithoutProjectInputSchema } from './DefaultDomainsUpsertWithWhereUniqueWithoutProjectInputSchema';
import { DefaultDomainsCreateManyProjectInputEnvelopeSchema } from './DefaultDomainsCreateManyProjectInputEnvelopeSchema';
import { DefaultDomainsWhereUniqueInputSchema } from './DefaultDomainsWhereUniqueInputSchema';
import { DefaultDomainsUpdateWithWhereUniqueWithoutProjectInputSchema } from './DefaultDomainsUpdateWithWhereUniqueWithoutProjectInputSchema';
import { DefaultDomainsUpdateManyWithWhereWithoutProjectInputSchema } from './DefaultDomainsUpdateManyWithWhereWithoutProjectInputSchema';
import { DefaultDomainsScalarWhereInputSchema } from './DefaultDomainsScalarWhereInputSchema';

export const DefaultDomainsUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.DefaultDomainsUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => DefaultDomainsCreateWithoutProjectInputSchema),z.lazy(() => DefaultDomainsCreateWithoutProjectInputSchema).array(),z.lazy(() => DefaultDomainsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => DefaultDomainsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DefaultDomainsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => DefaultDomainsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DefaultDomainsUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => DefaultDomainsUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DefaultDomainsCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DefaultDomainsWhereUniqueInputSchema),z.lazy(() => DefaultDomainsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DefaultDomainsWhereUniqueInputSchema),z.lazy(() => DefaultDomainsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DefaultDomainsWhereUniqueInputSchema),z.lazy(() => DefaultDomainsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DefaultDomainsWhereUniqueInputSchema),z.lazy(() => DefaultDomainsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DefaultDomainsUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => DefaultDomainsUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DefaultDomainsUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => DefaultDomainsUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DefaultDomainsScalarWhereInputSchema),z.lazy(() => DefaultDomainsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DefaultDomainsUncheckedUpdateManyWithoutProjectNestedInputSchema;
