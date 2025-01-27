import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereInputSchema } from '../inputTypeSchemas/PasswordResetTokenWhereInputSchema'
import { PasswordResetTokenOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PasswordResetTokenOrderByWithAggregationInputSchema'
import { PasswordResetTokenScalarFieldEnumSchema } from '../inputTypeSchemas/PasswordResetTokenScalarFieldEnumSchema'
import { PasswordResetTokenScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PasswordResetTokenScalarWhereWithAggregatesInputSchema'

export const PasswordResetTokenGroupByArgsSchema: z.ZodType<Prisma.PasswordResetTokenGroupByArgs> = z.object({
  where: PasswordResetTokenWhereInputSchema.optional(),
  orderBy: z.union([ PasswordResetTokenOrderByWithAggregationInputSchema.array(),PasswordResetTokenOrderByWithAggregationInputSchema ]).optional(),
  by: PasswordResetTokenScalarFieldEnumSchema.array(),
  having: PasswordResetTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PasswordResetTokenGroupByArgsSchema;
