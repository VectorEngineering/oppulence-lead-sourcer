import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankConnectionSettingsWhereInputSchema } from '../inputTypeSchemas/BankConnectionSettingsWhereInputSchema'

export const BankConnectionSettingsDeleteManyArgsSchema: z.ZodType<Prisma.BankConnectionSettingsDeleteManyArgs> = z.object({
  where: BankConnectionSettingsWhereInputSchema.optional(),
}).strict() ;

export default BankConnectionSettingsDeleteManyArgsSchema;
