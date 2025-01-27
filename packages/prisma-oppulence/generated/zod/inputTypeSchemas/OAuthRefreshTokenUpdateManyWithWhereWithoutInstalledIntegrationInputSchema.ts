import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenScalarWhereInputSchema } from './OAuthRefreshTokenScalarWhereInputSchema';
import { OAuthRefreshTokenUpdateManyMutationInputSchema } from './OAuthRefreshTokenUpdateManyMutationInputSchema';
import { OAuthRefreshTokenUncheckedUpdateManyWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUncheckedUpdateManyWithoutInstalledIntegrationInputSchema';

export const OAuthRefreshTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUpdateManyWithWhereWithoutInstalledIntegrationInput> = z.object({
  where: z.lazy(() => OAuthRefreshTokenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OAuthRefreshTokenUpdateManyMutationInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedUpdateManyWithoutInstalledIntegrationInputSchema) ]),
}).strict();

export default OAuthRefreshTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema;
