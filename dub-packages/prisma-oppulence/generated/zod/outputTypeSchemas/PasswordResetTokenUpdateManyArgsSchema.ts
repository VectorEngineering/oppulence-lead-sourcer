import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenUpdateManyMutationInputSchema } from '../inputTypeSchemas/PasswordResetTokenUpdateManyMutationInputSchema'
import { PasswordResetTokenUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PasswordResetTokenUncheckedUpdateManyInputSchema'
import { PasswordResetTokenWhereInputSchema } from '../inputTypeSchemas/PasswordResetTokenWhereInputSchema'

export const PasswordResetTokenUpdateManyArgsSchema: z.ZodType<Prisma.PasswordResetTokenUpdateManyArgs> = z.object({
  data: z.union([ PasswordResetTokenUpdateManyMutationInputSchema,PasswordResetTokenUncheckedUpdateManyInputSchema ]),
  where: PasswordResetTokenWhereInputSchema.optional(),
}).strict() ;

export default PasswordResetTokenUpdateManyArgsSchema;
