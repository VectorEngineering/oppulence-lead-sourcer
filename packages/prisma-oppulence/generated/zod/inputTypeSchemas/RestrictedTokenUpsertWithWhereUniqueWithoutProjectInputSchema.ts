import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenUpdateWithoutProjectInputSchema } from './RestrictedTokenUpdateWithoutProjectInputSchema';
import { RestrictedTokenUncheckedUpdateWithoutProjectInputSchema } from './RestrictedTokenUncheckedUpdateWithoutProjectInputSchema';
import { RestrictedTokenCreateWithoutProjectInputSchema } from './RestrictedTokenCreateWithoutProjectInputSchema';
import { RestrictedTokenUncheckedCreateWithoutProjectInputSchema } from './RestrictedTokenUncheckedCreateWithoutProjectInputSchema';

export const RestrictedTokenUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RestrictedTokenUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => RestrictedTokenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RestrictedTokenUpdateWithoutProjectInputSchema),z.lazy(() => RestrictedTokenUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutProjectInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default RestrictedTokenUpsertWithWhereUniqueWithoutProjectInputSchema;
