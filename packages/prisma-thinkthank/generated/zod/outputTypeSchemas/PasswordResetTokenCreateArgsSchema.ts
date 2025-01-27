import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenCreateInputSchema } from '../inputTypeSchemas/PasswordResetTokenCreateInputSchema'
import { PasswordResetTokenUncheckedCreateInputSchema } from '../inputTypeSchemas/PasswordResetTokenUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PasswordResetTokenSelectSchema: z.ZodType<Prisma.PasswordResetTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export const PasswordResetTokenCreateArgsSchema: z.ZodType<Prisma.PasswordResetTokenCreateArgs> = z.object({
  select: PasswordResetTokenSelectSchema.optional(),
  data: z.union([ PasswordResetTokenCreateInputSchema,PasswordResetTokenUncheckedCreateInputSchema ]),
}).strict() ;

export default PasswordResetTokenCreateArgsSchema;
