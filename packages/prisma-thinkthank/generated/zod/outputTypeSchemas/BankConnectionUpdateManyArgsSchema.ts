import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankConnectionUpdateManyMutationInputSchema } from '../inputTypeSchemas/BankConnectionUpdateManyMutationInputSchema'
import { BankConnectionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BankConnectionUncheckedUpdateManyInputSchema'
import { BankConnectionWhereInputSchema } from '../inputTypeSchemas/BankConnectionWhereInputSchema'

export const BankConnectionUpdateManyArgsSchema: z.ZodType<Prisma.BankConnectionUpdateManyArgs> = z.object({
  data: z.union([ BankConnectionUpdateManyMutationInputSchema,BankConnectionUncheckedUpdateManyInputSchema ]),
  where: BankConnectionWhereInputSchema.optional(),
}).strict() ;

export default BankConnectionUpdateManyArgsSchema;
