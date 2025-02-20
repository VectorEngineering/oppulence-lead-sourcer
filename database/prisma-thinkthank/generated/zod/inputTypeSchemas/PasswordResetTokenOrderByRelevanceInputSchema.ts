import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PasswordResetTokenOrderByRelevanceFieldEnumSchema } from './PasswordResetTokenOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PasswordResetTokenOrderByRelevanceInputSchema: z.ZodType<Prisma.PasswordResetTokenOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => PasswordResetTokenOrderByRelevanceFieldEnumSchema),z.lazy(() => PasswordResetTokenOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default PasswordResetTokenOrderByRelevanceInputSchema;
