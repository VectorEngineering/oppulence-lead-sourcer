import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereInputSchema } from '../inputTypeSchemas/PasswordResetTokenWhereInputSchema'
import { PasswordResetTokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/PasswordResetTokenOrderByWithRelationInputSchema'
import { PasswordResetTokenWhereUniqueInputSchema } from '../inputTypeSchemas/PasswordResetTokenWhereUniqueInputSchema'
import { PasswordResetTokenScalarFieldEnumSchema } from '../inputTypeSchemas/PasswordResetTokenScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PasswordResetTokenSelectSchema: z.ZodType<Prisma.PasswordResetTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export const PasswordResetTokenFindFirstArgsSchema: z.ZodType<Prisma.PasswordResetTokenFindFirstArgs> = z.object({
  select: PasswordResetTokenSelectSchema.optional(),
  where: PasswordResetTokenWhereInputSchema.optional(),
  orderBy: z.union([ PasswordResetTokenOrderByWithRelationInputSchema.array(),PasswordResetTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: PasswordResetTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PasswordResetTokenScalarFieldEnumSchema,PasswordResetTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PasswordResetTokenFindFirstArgsSchema;
