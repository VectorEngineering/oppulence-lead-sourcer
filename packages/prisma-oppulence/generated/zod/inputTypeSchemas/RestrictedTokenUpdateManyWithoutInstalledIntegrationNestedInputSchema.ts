import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenCreateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenCreateWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInputSchema } from './RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenCreateManyInstalledIntegrationInputEnvelopeSchema } from './RestrictedTokenCreateManyInstalledIntegrationInputEnvelopeSchema';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenScalarWhereInputSchema } from './RestrictedTokenScalarWhereInputSchema';

export const RestrictedTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateManyWithoutInstalledIntegrationNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutInstalledIntegrationInputSchema),z.lazy(() => RestrictedTokenCreateWithoutInstalledIntegrationInputSchema).array(),z.lazy(() => RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInputSchema),z.lazy(() => RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RestrictedTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema),z.lazy(() => RestrictedTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RestrictedTokenCreateManyInstalledIntegrationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RestrictedTokenWhereUniqueInputSchema),z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RestrictedTokenWhereUniqueInputSchema),z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RestrictedTokenWhereUniqueInputSchema),z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RestrictedTokenWhereUniqueInputSchema),z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RestrictedTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema),z.lazy(() => RestrictedTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RestrictedTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema),z.lazy(() => RestrictedTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RestrictedTokenScalarWhereInputSchema),z.lazy(() => RestrictedTokenScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RestrictedTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema;
