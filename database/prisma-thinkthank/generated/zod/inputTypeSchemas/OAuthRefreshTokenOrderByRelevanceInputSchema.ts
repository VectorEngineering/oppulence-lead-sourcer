import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenOrderByRelevanceFieldEnumSchema } from './OAuthRefreshTokenOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const OAuthRefreshTokenOrderByRelevanceInputSchema: z.ZodType<Prisma.OAuthRefreshTokenOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => OAuthRefreshTokenOrderByRelevanceFieldEnumSchema),z.lazy(() => OAuthRefreshTokenOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default OAuthRefreshTokenOrderByRelevanceInputSchema;
