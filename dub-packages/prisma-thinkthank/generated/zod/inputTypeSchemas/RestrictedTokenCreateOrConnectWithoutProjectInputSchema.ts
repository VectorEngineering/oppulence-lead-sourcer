import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenCreateWithoutProjectInputSchema } from './RestrictedTokenCreateWithoutProjectInputSchema';
import { RestrictedTokenUncheckedCreateWithoutProjectInputSchema } from './RestrictedTokenUncheckedCreateWithoutProjectInputSchema';

export const RestrictedTokenCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.RestrictedTokenCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => RestrictedTokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutProjectInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default RestrictedTokenCreateOrConnectWithoutProjectInputSchema;
