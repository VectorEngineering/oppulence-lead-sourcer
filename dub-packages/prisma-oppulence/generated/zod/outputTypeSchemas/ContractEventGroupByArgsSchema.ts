import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractEventWhereInputSchema } from '../inputTypeSchemas/ContractEventWhereInputSchema'
import { ContractEventOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ContractEventOrderByWithAggregationInputSchema'
import { ContractEventScalarFieldEnumSchema } from '../inputTypeSchemas/ContractEventScalarFieldEnumSchema'
import { ContractEventScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ContractEventScalarWhereWithAggregatesInputSchema'

export const ContractEventGroupByArgsSchema: z.ZodType<Prisma.ContractEventGroupByArgs> = z.object({
  where: ContractEventWhereInputSchema.optional(),
  orderBy: z.union([ ContractEventOrderByWithAggregationInputSchema.array(),ContractEventOrderByWithAggregationInputSchema ]).optional(),
  by: ContractEventScalarFieldEnumSchema.array(),
  having: ContractEventScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ContractEventGroupByArgsSchema;
