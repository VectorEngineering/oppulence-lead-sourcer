import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmailVerificationTokenWhereUniqueInputSchema } from '../inputTypeSchemas/EmailVerificationTokenWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EmailVerificationTokenSelectSchema: z.ZodType<Prisma.EmailVerificationTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export const EmailVerificationTokenDeleteArgsSchema: z.ZodType<Prisma.EmailVerificationTokenDeleteArgs> = z.object({
  select: EmailVerificationTokenSelectSchema.optional(),
  where: EmailVerificationTokenWhereUniqueInputSchema,
}).strict() ;

export default EmailVerificationTokenDeleteArgsSchema;
