import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthCodeCreateWithoutProjectInputSchema } from './OAuthCodeCreateWithoutProjectInputSchema';
import { OAuthCodeUncheckedCreateWithoutProjectInputSchema } from './OAuthCodeUncheckedCreateWithoutProjectInputSchema';
import { OAuthCodeCreateOrConnectWithoutProjectInputSchema } from './OAuthCodeCreateOrConnectWithoutProjectInputSchema';
import { OAuthCodeCreateManyProjectInputEnvelopeSchema } from './OAuthCodeCreateManyProjectInputEnvelopeSchema';
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema';

export const OAuthCodeUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.OAuthCodeUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => OAuthCodeCreateWithoutProjectInputSchema),z.lazy(() => OAuthCodeCreateWithoutProjectInputSchema).array(),z.lazy(() => OAuthCodeUncheckedCreateWithoutProjectInputSchema),z.lazy(() => OAuthCodeUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OAuthCodeCreateOrConnectWithoutProjectInputSchema),z.lazy(() => OAuthCodeCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OAuthCodeCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OAuthCodeWhereUniqueInputSchema),z.lazy(() => OAuthCodeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OAuthCodeUncheckedCreateNestedManyWithoutProjectInputSchema;
