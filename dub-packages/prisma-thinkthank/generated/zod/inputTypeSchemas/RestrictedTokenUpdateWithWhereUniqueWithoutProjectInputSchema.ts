import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenUpdateWithoutProjectInputSchema } from './RestrictedTokenUpdateWithoutProjectInputSchema';
import { RestrictedTokenUncheckedUpdateWithoutProjectInputSchema } from './RestrictedTokenUncheckedUpdateWithoutProjectInputSchema';

export const RestrictedTokenUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => RestrictedTokenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RestrictedTokenUpdateWithoutProjectInputSchema),z.lazy(() => RestrictedTokenUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default RestrictedTokenUpdateWithWhereUniqueWithoutProjectInputSchema;
