import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenCreateManyInstalledIntegrationInputEnvelopeSchema } from './OAuthRefreshTokenCreateManyInstalledIntegrationInputEnvelopeSchema';
import { OAuthRefreshTokenWhereUniqueInputSchema } from './OAuthRefreshTokenWhereUniqueInputSchema';
import { OAuthRefreshTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema';
import { OAuthRefreshTokenScalarWhereInputSchema } from './OAuthRefreshTokenScalarWhereInputSchema';

export const OAuthRefreshTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUpdateManyWithoutInstalledIntegrationNestedInput> = z.object({
  create: z.union([ z.lazy(() => OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema).array(),z.lazy(() => OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedCreateWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenCreateOrConnectWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OAuthRefreshTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OAuthRefreshTokenCreateManyInstalledIntegrationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OAuthRefreshTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OAuthRefreshTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema),z.lazy(() => OAuthRefreshTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OAuthRefreshTokenScalarWhereInputSchema),z.lazy(() => OAuthRefreshTokenScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OAuthRefreshTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema;
