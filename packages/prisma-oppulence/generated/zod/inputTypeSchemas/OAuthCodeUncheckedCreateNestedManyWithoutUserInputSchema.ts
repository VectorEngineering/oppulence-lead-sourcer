import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthCodeCreateWithoutUserInputSchema } from './OAuthCodeCreateWithoutUserInputSchema';
import { OAuthCodeUncheckedCreateWithoutUserInputSchema } from './OAuthCodeUncheckedCreateWithoutUserInputSchema';
import { OAuthCodeCreateOrConnectWithoutUserInputSchema } from './OAuthCodeCreateOrConnectWithoutUserInputSchema';
import { OAuthCodeCreateManyUserInputEnvelopeSchema } from './OAuthCodeCreateManyUserInputEnvelopeSchema';
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema';

export const OAuthCodeUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.OAuthCodeUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => OAuthCodeCreateWithoutUserInputSchema),z.lazy(() => OAuthCodeCreateWithoutUserInputSchema).array(),z.lazy(() => OAuthCodeUncheckedCreateWithoutUserInputSchema),z.lazy(() => OAuthCodeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OAuthCodeCreateOrConnectWithoutUserInputSchema),z.lazy(() => OAuthCodeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OAuthCodeCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OAuthCodeWhereUniqueInputSchema),z.lazy(() => OAuthCodeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OAuthCodeUncheckedCreateNestedManyWithoutUserInputSchema;
