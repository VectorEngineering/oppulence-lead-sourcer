import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthCodeCreateWithoutOAuthAppInputSchema } from './OAuthCodeCreateWithoutOAuthAppInputSchema';
import { OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema } from './OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema';
import { OAuthCodeCreateOrConnectWithoutOAuthAppInputSchema } from './OAuthCodeCreateOrConnectWithoutOAuthAppInputSchema';
import { OAuthCodeUpsertWithWhereUniqueWithoutOAuthAppInputSchema } from './OAuthCodeUpsertWithWhereUniqueWithoutOAuthAppInputSchema';
import { OAuthCodeCreateManyOAuthAppInputEnvelopeSchema } from './OAuthCodeCreateManyOAuthAppInputEnvelopeSchema';
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema';
import { OAuthCodeUpdateWithWhereUniqueWithoutOAuthAppInputSchema } from './OAuthCodeUpdateWithWhereUniqueWithoutOAuthAppInputSchema';
import { OAuthCodeUpdateManyWithWhereWithoutOAuthAppInputSchema } from './OAuthCodeUpdateManyWithWhereWithoutOAuthAppInputSchema';
import { OAuthCodeScalarWhereInputSchema } from './OAuthCodeScalarWhereInputSchema';

export const OAuthCodeUncheckedUpdateManyWithoutOAuthAppNestedInputSchema: z.ZodType<Prisma.OAuthCodeUncheckedUpdateManyWithoutOAuthAppNestedInput> = z.object({
  create: z.union([ z.lazy(() => OAuthCodeCreateWithoutOAuthAppInputSchema),z.lazy(() => OAuthCodeCreateWithoutOAuthAppInputSchema).array(),z.lazy(() => OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema),z.lazy(() => OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OAuthCodeCreateOrConnectWithoutOAuthAppInputSchema),z.lazy(() => OAuthCodeCreateOrConnectWithoutOAuthAppInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OAuthCodeUpsertWithWhereUniqueWithoutOAuthAppInputSchema),z.lazy(() => OAuthCodeUpsertWithWhereUniqueWithoutOAuthAppInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OAuthCodeCreateManyOAuthAppInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OAuthCodeWhereUniqueInputSchema),z.lazy(() => OAuthCodeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OAuthCodeWhereUniqueInputSchema),z.lazy(() => OAuthCodeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OAuthCodeWhereUniqueInputSchema),z.lazy(() => OAuthCodeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OAuthCodeWhereUniqueInputSchema),z.lazy(() => OAuthCodeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OAuthCodeUpdateWithWhereUniqueWithoutOAuthAppInputSchema),z.lazy(() => OAuthCodeUpdateWithWhereUniqueWithoutOAuthAppInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OAuthCodeUpdateManyWithWhereWithoutOAuthAppInputSchema),z.lazy(() => OAuthCodeUpdateManyWithWhereWithoutOAuthAppInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OAuthCodeScalarWhereInputSchema),z.lazy(() => OAuthCodeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OAuthCodeUncheckedUpdateManyWithoutOAuthAppNestedInputSchema;
