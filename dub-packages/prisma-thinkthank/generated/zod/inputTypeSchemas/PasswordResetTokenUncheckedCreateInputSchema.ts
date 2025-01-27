import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PasswordResetTokenUncheckedCreateInputSchema: z.ZodType<Prisma.PasswordResetTokenUncheckedCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export default PasswordResetTokenUncheckedCreateInputSchema;
