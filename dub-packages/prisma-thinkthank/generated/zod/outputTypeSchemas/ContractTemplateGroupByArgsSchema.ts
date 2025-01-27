import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractTemplateWhereInputSchema } from '../inputTypeSchemas/ContractTemplateWhereInputSchema'
import { ContractTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ContractTemplateOrderByWithAggregationInputSchema'
import { ContractTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/ContractTemplateScalarFieldEnumSchema'
import { ContractTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ContractTemplateScalarWhereWithAggregatesInputSchema'

export const ContractTemplateGroupByArgsSchema: z.ZodType<Prisma.ContractTemplateGroupByArgs> = z.object({
  where: ContractTemplateWhereInputSchema.optional(),
  orderBy: z.union([ ContractTemplateOrderByWithAggregationInputSchema.array(),ContractTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: ContractTemplateScalarFieldEnumSchema.array(),
  having: ContractTemplateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ContractTemplateGroupByArgsSchema;
