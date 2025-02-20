import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenUpdateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUpdateWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema';

export const RestrictedTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInput> = z.object({
  where: z.lazy(() => RestrictedTokenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RestrictedTokenUpdateWithoutInstalledIntegrationInputSchema),z.lazy(() => RestrictedTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema) ]),
}).strict();

export default RestrictedTokenUpdateWithWhereUniqueWithoutInstalledIntegrationInputSchema;
