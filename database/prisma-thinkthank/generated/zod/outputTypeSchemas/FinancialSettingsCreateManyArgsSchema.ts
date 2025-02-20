import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FinancialSettingsCreateManyInputSchema } from '../inputTypeSchemas/FinancialSettingsCreateManyInputSchema'

export const FinancialSettingsCreateManyArgsSchema: z.ZodType<Prisma.FinancialSettingsCreateManyArgs> = z.object({
  data: z.union([ FinancialSettingsCreateManyInputSchema,FinancialSettingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default FinancialSettingsCreateManyArgsSchema;
