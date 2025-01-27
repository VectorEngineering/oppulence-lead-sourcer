import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserPurchaseWhereUniqueInputSchema } from '../inputTypeSchemas/UserPurchaseWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserPurchaseSelectSchema: z.ZodType<Prisma.UserPurchaseSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  stripeId: z.boolean().optional(),
  description: z.boolean().optional(),
  amount: z.boolean().optional(),
  currency: z.boolean().optional(),
  date: z.boolean().optional(),
}).strict()

export const UserPurchaseDeleteArgsSchema: z.ZodType<Prisma.UserPurchaseDeleteArgs> = z.object({
  select: UserPurchaseSelectSchema.optional(),
  where: UserPurchaseWhereUniqueInputSchema,
}).strict() ;

export default UserPurchaseDeleteArgsSchema;
