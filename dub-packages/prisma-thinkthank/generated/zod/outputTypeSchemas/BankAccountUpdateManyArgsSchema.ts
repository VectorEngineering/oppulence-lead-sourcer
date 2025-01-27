import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankAccountUpdateManyMutationInputSchema } from '../inputTypeSchemas/BankAccountUpdateManyMutationInputSchema'
import { BankAccountUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BankAccountUncheckedUpdateManyInputSchema'
import { BankAccountWhereInputSchema } from '../inputTypeSchemas/BankAccountWhereInputSchema'

export const BankAccountUpdateManyArgsSchema: z.ZodType<Prisma.BankAccountUpdateManyArgs> = z.object({
  data: z.union([ BankAccountUpdateManyMutationInputSchema,BankAccountUncheckedUpdateManyInputSchema ]),
  where: BankAccountWhereInputSchema.optional(),
}).strict() ;

export default BankAccountUpdateManyArgsSchema;
