import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema';
import { RestrictedTokenCreateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenCreateWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema';

export const RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInput> = z.object({
  where: z.lazy(() => RestrictedTokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestrictedTokenCreateWithoutInstalledIntegrationInputSchema),z.lazy(() => RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema) ]),
}).strict();

export default RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInputSchema;
