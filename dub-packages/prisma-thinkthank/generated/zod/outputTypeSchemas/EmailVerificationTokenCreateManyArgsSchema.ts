import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmailVerificationTokenCreateManyInputSchema } from '../inputTypeSchemas/EmailVerificationTokenCreateManyInputSchema'

export const EmailVerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.EmailVerificationTokenCreateManyArgs> = z.object({
  data: z.union([ EmailVerificationTokenCreateManyInputSchema,EmailVerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EmailVerificationTokenCreateManyArgsSchema;
