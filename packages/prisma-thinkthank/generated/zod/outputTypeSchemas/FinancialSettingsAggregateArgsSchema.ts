import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FinancialSettingsWhereInputSchema } from '../inputTypeSchemas/FinancialSettingsWhereInputSchema'
import { FinancialSettingsOrderByWithRelationInputSchema } from '../inputTypeSchemas/FinancialSettingsOrderByWithRelationInputSchema'
import { FinancialSettingsWhereUniqueInputSchema } from '../inputTypeSchemas/FinancialSettingsWhereUniqueInputSchema'

export const FinancialSettingsAggregateArgsSchema: z.ZodType<Prisma.FinancialSettingsAggregateArgs> = z.object({
  where: FinancialSettingsWhereInputSchema.optional(),
  orderBy: z.union([ FinancialSettingsOrderByWithRelationInputSchema.array(),FinancialSettingsOrderByWithRelationInputSchema ]).optional(),
  cursor: FinancialSettingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default FinancialSettingsAggregateArgsSchema;
