import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmailVerificationTokenWhereInputSchema } from '../inputTypeSchemas/EmailVerificationTokenWhereInputSchema'

export const EmailVerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.EmailVerificationTokenDeleteManyArgs> = z.object({
  where: EmailVerificationTokenWhereInputSchema.optional(),
}).strict() ;

export default EmailVerificationTokenDeleteManyArgsSchema;
