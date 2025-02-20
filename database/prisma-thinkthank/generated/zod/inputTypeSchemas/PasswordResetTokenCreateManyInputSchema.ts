import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PasswordResetTokenCreateManyInputSchema: z.ZodType<Prisma.PasswordResetTokenCreateManyInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export default PasswordResetTokenCreateManyInputSchema;
