import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthCodeWhereInputSchema } from './OAuthCodeWhereInputSchema';

export const OAuthCodeListRelationFilterSchema: z.ZodType<Prisma.OAuthCodeListRelationFilter> = z.object({
  every: z.lazy(() => OAuthCodeWhereInputSchema).optional(),
  some: z.lazy(() => OAuthCodeWhereInputSchema).optional(),
  none: z.lazy(() => OAuthCodeWhereInputSchema).optional()
}).strict();

export default OAuthCodeListRelationFilterSchema;
