import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FinancialSettingsUpdateManyMutationInputSchema } from '../inputTypeSchemas/FinancialSettingsUpdateManyMutationInputSchema'
import { FinancialSettingsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/FinancialSettingsUncheckedUpdateManyInputSchema'
import { FinancialSettingsWhereInputSchema } from '../inputTypeSchemas/FinancialSettingsWhereInputSchema'

export const FinancialSettingsUpdateManyArgsSchema: z.ZodType<Prisma.FinancialSettingsUpdateManyArgs> = z.object({
  data: z.union([ FinancialSettingsUpdateManyMutationInputSchema,FinancialSettingsUncheckedUpdateManyInputSchema ]),
  where: FinancialSettingsWhereInputSchema.optional(),
}).strict() ;

export default FinancialSettingsUpdateManyArgsSchema;
