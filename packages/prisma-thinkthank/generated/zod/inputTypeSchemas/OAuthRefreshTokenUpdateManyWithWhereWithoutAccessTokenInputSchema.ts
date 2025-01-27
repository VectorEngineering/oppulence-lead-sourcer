import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenScalarWhereInputSchema } from './OAuthRefreshTokenScalarWhereInputSchema';
import { OAuthRefreshTokenUpdateManyMutationInputSchema } from './OAuthRefreshTokenUpdateManyMutationInputSchema';
import { OAuthRefreshTokenUncheckedUpdateManyWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUncheckedUpdateManyWithoutAccessTokenInputSchema';

export const OAuthRefreshTokenUpdateManyWithWhereWithoutAccessTokenInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUpdateManyWithWhereWithoutAccessTokenInput> = z.object({
  where: z.lazy(() => OAuthRefreshTokenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OAuthRefreshTokenUpdateManyMutationInputSchema),z.lazy(() => OAuthRefreshTokenUncheckedUpdateManyWithoutAccessTokenInputSchema) ]),
}).strict();

export default OAuthRefreshTokenUpdateManyWithWhereWithoutAccessTokenInputSchema;
