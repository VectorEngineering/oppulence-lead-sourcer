import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankConnectionSettingsCreateManyInputSchema } from '../inputTypeSchemas/BankConnectionSettingsCreateManyInputSchema'

export const BankConnectionSettingsCreateManyArgsSchema: z.ZodType<Prisma.BankConnectionSettingsCreateManyArgs> = z.object({
  data: z.union([ BankConnectionSettingsCreateManyInputSchema,BankConnectionSettingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BankConnectionSettingsCreateManyArgsSchema;
