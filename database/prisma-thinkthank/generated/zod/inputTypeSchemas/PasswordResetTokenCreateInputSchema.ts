import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PasswordResetTokenCreateInputSchema: z.ZodType<Prisma.PasswordResetTokenCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export default PasswordResetTokenCreateInputSchema;
