import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenCreateWithoutUserInputSchema } from './RestrictedTokenCreateWithoutUserInputSchema';
import { RestrictedTokenUncheckedCreateWithoutUserInputSchema } from './RestrictedTokenUncheckedCreateWithoutUserInputSchema';

export const RestrictedTokenCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.RestrictedTokenCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => RestrictedTokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutUserInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default RestrictedTokenCreateOrConnectWithoutUserInputSchema;
