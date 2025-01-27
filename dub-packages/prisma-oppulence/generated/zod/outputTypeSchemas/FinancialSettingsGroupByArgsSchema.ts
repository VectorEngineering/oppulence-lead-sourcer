import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FinancialSettingsWhereInputSchema } from '../inputTypeSchemas/FinancialSettingsWhereInputSchema'
import { FinancialSettingsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/FinancialSettingsOrderByWithAggregationInputSchema'
import { FinancialSettingsScalarFieldEnumSchema } from '../inputTypeSchemas/FinancialSettingsScalarFieldEnumSchema'
import { FinancialSettingsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/FinancialSettingsScalarWhereWithAggregatesInputSchema'

export const FinancialSettingsGroupByArgsSchema: z.ZodType<Prisma.FinancialSettingsGroupByArgs> = z.object({
  where: FinancialSettingsWhereInputSchema.optional(),
  orderBy: z.union([ FinancialSettingsOrderByWithAggregationInputSchema.array(),FinancialSettingsOrderByWithAggregationInputSchema ]).optional(),
  by: FinancialSettingsScalarFieldEnumSchema.array(),
  having: FinancialSettingsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default FinancialSettingsGroupByArgsSchema;
