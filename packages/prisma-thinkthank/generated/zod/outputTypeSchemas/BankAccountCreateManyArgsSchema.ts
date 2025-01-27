import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankAccountCreateManyInputSchema } from '../inputTypeSchemas/BankAccountCreateManyInputSchema'

export const BankAccountCreateManyArgsSchema: z.ZodType<Prisma.BankAccountCreateManyArgs> = z.object({
  data: z.union([ BankAccountCreateManyInputSchema,BankAccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BankAccountCreateManyArgsSchema;
