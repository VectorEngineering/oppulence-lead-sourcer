import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EmailVerificationTokenCreateManyInputSchema: z.ZodType<Prisma.EmailVerificationTokenCreateManyInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export default EmailVerificationTokenCreateManyInputSchema;
