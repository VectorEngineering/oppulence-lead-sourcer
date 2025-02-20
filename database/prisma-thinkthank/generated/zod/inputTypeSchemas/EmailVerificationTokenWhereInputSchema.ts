import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const EmailVerificationTokenWhereInputSchema: z.ZodType<Prisma.EmailVerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EmailVerificationTokenWhereInputSchema),z.lazy(() => EmailVerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EmailVerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EmailVerificationTokenWhereInputSchema),z.lazy(() => EmailVerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default EmailVerificationTokenWhereInputSchema;
