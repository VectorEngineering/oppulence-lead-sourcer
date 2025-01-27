import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenUpdateWithoutUserInputSchema } from './RestrictedTokenUpdateWithoutUserInputSchema';
import { RestrictedTokenUncheckedUpdateWithoutUserInputSchema } from './RestrictedTokenUncheckedUpdateWithoutUserInputSchema';
import { RestrictedTokenCreateWithoutUserInputSchema } from './RestrictedTokenCreateWithoutUserInputSchema';
import { RestrictedTokenUncheckedCreateWithoutUserInputSchema } from './RestrictedTokenUncheckedCreateWithoutUserInputSchema';

export const RestrictedTokenUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RestrictedTokenUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => RestrictedTokenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RestrictedTokenUpdateWithoutUserInputSchema),z.lazy(() => RestrictedTokenUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutUserInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default RestrictedTokenUpsertWithWhereUniqueWithoutUserInputSchema;
