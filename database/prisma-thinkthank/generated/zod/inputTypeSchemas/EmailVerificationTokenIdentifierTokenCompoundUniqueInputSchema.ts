import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EmailVerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.EmailVerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export default EmailVerificationTokenIdentifierTokenCompoundUniqueInputSchema;
