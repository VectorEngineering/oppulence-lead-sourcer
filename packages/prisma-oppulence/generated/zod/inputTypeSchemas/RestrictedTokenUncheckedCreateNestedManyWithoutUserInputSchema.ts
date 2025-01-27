import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenCreateWithoutUserInputSchema } from './RestrictedTokenCreateWithoutUserInputSchema';
import { RestrictedTokenUncheckedCreateWithoutUserInputSchema } from './RestrictedTokenUncheckedCreateWithoutUserInputSchema';
import { RestrictedTokenCreateOrConnectWithoutUserInputSchema } from './RestrictedTokenCreateOrConnectWithoutUserInputSchema';
import { RestrictedTokenCreateManyUserInputEnvelopeSchema } from './RestrictedTokenCreateManyUserInputEnvelopeSchema';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';

export const RestrictedTokenUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.RestrictedTokenUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutUserInputSchema),z.lazy(() => RestrictedTokenCreateWithoutUserInputSchema).array(),z.lazy(() => RestrictedTokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RestrictedTokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => RestrictedTokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RestrictedTokenCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RestrictedTokenWhereUniqueInputSchema),z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RestrictedTokenUncheckedCreateNestedManyWithoutUserInputSchema;
