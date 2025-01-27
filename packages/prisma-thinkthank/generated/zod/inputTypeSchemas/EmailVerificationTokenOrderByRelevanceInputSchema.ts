import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EmailVerificationTokenOrderByRelevanceFieldEnumSchema } from './EmailVerificationTokenOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const EmailVerificationTokenOrderByRelevanceInputSchema: z.ZodType<Prisma.EmailVerificationTokenOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => EmailVerificationTokenOrderByRelevanceFieldEnumSchema),z.lazy(() => EmailVerificationTokenOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default EmailVerificationTokenOrderByRelevanceInputSchema;
