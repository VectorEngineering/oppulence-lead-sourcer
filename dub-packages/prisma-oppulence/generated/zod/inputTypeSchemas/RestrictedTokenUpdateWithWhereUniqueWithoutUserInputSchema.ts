import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenUpdateWithoutUserInputSchema } from './RestrictedTokenUpdateWithoutUserInputSchema';
import { RestrictedTokenUncheckedUpdateWithoutUserInputSchema } from './RestrictedTokenUncheckedUpdateWithoutUserInputSchema';

export const RestrictedTokenUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => RestrictedTokenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RestrictedTokenUpdateWithoutUserInputSchema),z.lazy(() => RestrictedTokenUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default RestrictedTokenUpdateWithWhereUniqueWithoutUserInputSchema;
