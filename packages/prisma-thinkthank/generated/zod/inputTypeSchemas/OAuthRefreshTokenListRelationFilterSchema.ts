import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenWhereInputSchema } from './OAuthRefreshTokenWhereInputSchema';

export const OAuthRefreshTokenListRelationFilterSchema: z.ZodType<Prisma.OAuthRefreshTokenListRelationFilter> = z.object({
  every: z.lazy(() => OAuthRefreshTokenWhereInputSchema).optional(),
  some: z.lazy(() => OAuthRefreshTokenWhereInputSchema).optional(),
  none: z.lazy(() => OAuthRefreshTokenWhereInputSchema).optional()
}).strict();

export default OAuthRefreshTokenListRelationFilterSchema;
