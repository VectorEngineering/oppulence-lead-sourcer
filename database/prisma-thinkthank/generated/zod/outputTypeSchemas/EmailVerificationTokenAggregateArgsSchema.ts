import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmailVerificationTokenWhereInputSchema } from '../inputTypeSchemas/EmailVerificationTokenWhereInputSchema'
import { EmailVerificationTokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/EmailVerificationTokenOrderByWithRelationInputSchema'
import { EmailVerificationTokenWhereUniqueInputSchema } from '../inputTypeSchemas/EmailVerificationTokenWhereUniqueInputSchema'

export const EmailVerificationTokenAggregateArgsSchema: z.ZodType<Prisma.EmailVerificationTokenAggregateArgs> = z.object({
  where: EmailVerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ EmailVerificationTokenOrderByWithRelationInputSchema.array(),EmailVerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: EmailVerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EmailVerificationTokenAggregateArgsSchema;
