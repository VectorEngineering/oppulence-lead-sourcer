import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthAppWhereInputSchema } from './OAuthAppWhereInputSchema';

export const OAuthAppRelationFilterSchema: z.ZodType<Prisma.OAuthAppRelationFilter> = z.object({
  is: z.lazy(() => OAuthAppWhereInputSchema).optional(),
  isNot: z.lazy(() => OAuthAppWhereInputSchema).optional()
}).strict();

export default OAuthAppRelationFilterSchema;
