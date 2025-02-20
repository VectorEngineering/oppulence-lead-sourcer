import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmailVerificationTokenUpdateManyMutationInputSchema } from '../inputTypeSchemas/EmailVerificationTokenUpdateManyMutationInputSchema'
import { EmailVerificationTokenUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EmailVerificationTokenUncheckedUpdateManyInputSchema'
import { EmailVerificationTokenWhereInputSchema } from '../inputTypeSchemas/EmailVerificationTokenWhereInputSchema'

export const EmailVerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.EmailVerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ EmailVerificationTokenUpdateManyMutationInputSchema,EmailVerificationTokenUncheckedUpdateManyInputSchema ]),
  where: EmailVerificationTokenWhereInputSchema.optional(),
}).strict() ;

export default EmailVerificationTokenUpdateManyArgsSchema;
