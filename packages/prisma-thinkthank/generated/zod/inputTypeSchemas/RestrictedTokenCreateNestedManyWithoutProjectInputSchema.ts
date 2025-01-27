import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenCreateWithoutProjectInputSchema } from './RestrictedTokenCreateWithoutProjectInputSchema';
import { RestrictedTokenUncheckedCreateWithoutProjectInputSchema } from './RestrictedTokenUncheckedCreateWithoutProjectInputSchema';
import { RestrictedTokenCreateOrConnectWithoutProjectInputSchema } from './RestrictedTokenCreateOrConnectWithoutProjectInputSchema';
import { RestrictedTokenCreateManyProjectInputEnvelopeSchema } from './RestrictedTokenCreateManyProjectInputEnvelopeSchema';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';

export const RestrictedTokenCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.RestrictedTokenCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutProjectInputSchema),z.lazy(() => RestrictedTokenCreateWithoutProjectInputSchema).array(),z.lazy(() => RestrictedTokenUncheckedCreateWithoutProjectInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RestrictedTokenCreateOrConnectWithoutProjectInputSchema),z.lazy(() => RestrictedTokenCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RestrictedTokenCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RestrictedTokenWhereUniqueInputSchema),z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RestrictedTokenCreateNestedManyWithoutProjectInputSchema;
