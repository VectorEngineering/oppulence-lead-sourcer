import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankConnectionWhereInputSchema } from '../inputTypeSchemas/BankConnectionWhereInputSchema'

export const BankConnectionDeleteManyArgsSchema: z.ZodType<Prisma.BankConnectionDeleteManyArgs> = z.object({
  where: BankConnectionWhereInputSchema.optional(),
}).strict() ;

export default BankConnectionDeleteManyArgsSchema;
