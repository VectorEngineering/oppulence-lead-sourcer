import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenCreateWithoutProjectInputSchema } from './RestrictedTokenCreateWithoutProjectInputSchema';
import { RestrictedTokenUncheckedCreateWithoutProjectInputSchema } from './RestrictedTokenUncheckedCreateWithoutProjectInputSchema';
import { RestrictedTokenCreateOrConnectWithoutProjectInputSchema } from './RestrictedTokenCreateOrConnectWithoutProjectInputSchema';
import { RestrictedTokenUpsertWithWhereUniqueWithoutProjectInputSchema } from './RestrictedTokenUpsertWithWhereUniqueWithoutProjectInputSchema';
import { RestrictedTokenCreateManyProjectInputEnvelopeSchema } from './RestrictedTokenCreateManyProjectInputEnvelopeSchema';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenUpdateWithWhereUniqueWithoutProjectInputSchema } from './RestrictedTokenUpdateWithWhereUniqueWithoutProjectInputSchema';
import { RestrictedTokenUpdateManyWithWhereWithoutProjectInputSchema } from './RestrictedTokenUpdateManyWithWhereWithoutProjectInputSchema';
import { RestrictedTokenScalarWhereInputSchema } from './RestrictedTokenScalarWhereInputSchema';

export const RestrictedTokenUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.RestrictedTokenUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutProjectInputSchema),z.lazy(() => RestrictedTokenCreateWithoutProjectInputSchema).array(),z.lazy(() => RestrictedTokenUncheckedCreateWithoutProjectInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RestrictedTokenCreateOrConnectWithoutProjectInputSchema),z.lazy(() => RestrictedTokenCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RestrictedTokenUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => RestrictedTokenUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RestrictedTokenCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RestrictedTokenWhereUniqueInputSchema),z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RestrictedTokenWhereUniqueInputSchema),z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RestrictedTokenWhereUniqueInputSchema),z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RestrictedTokenWhereUniqueInputSchema),z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RestrictedTokenUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => RestrictedTokenUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RestrictedTokenUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => RestrictedTokenUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RestrictedTokenScalarWhereInputSchema),z.lazy(() => RestrictedTokenScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RestrictedTokenUncheckedUpdateManyWithoutProjectNestedInputSchema;
