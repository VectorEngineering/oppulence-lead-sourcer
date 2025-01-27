import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FinancialSettingsWhereInputSchema } from '../inputTypeSchemas/FinancialSettingsWhereInputSchema'

export const FinancialSettingsDeleteManyArgsSchema: z.ZodType<Prisma.FinancialSettingsDeleteManyArgs> = z.object({
  where: FinancialSettingsWhereInputSchema.optional(),
}).strict() ;

export default FinancialSettingsDeleteManyArgsSchema;
