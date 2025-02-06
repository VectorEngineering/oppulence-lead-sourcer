import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereInputSchema } from '../inputTypeSchemas/PasswordResetTokenWhereInputSchema'

export const PasswordResetTokenDeleteManyArgsSchema: z.ZodType<Prisma.PasswordResetTokenDeleteManyArgs> = z.object({
  where: PasswordResetTokenWhereInputSchema.optional(),
}).strict() ;

export default PasswordResetTokenDeleteManyArgsSchema;
