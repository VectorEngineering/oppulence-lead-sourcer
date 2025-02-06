import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractEventWhereInputSchema } from '../inputTypeSchemas/ContractEventWhereInputSchema'
import { ContractEventOrderByWithRelationInputSchema } from '../inputTypeSchemas/ContractEventOrderByWithRelationInputSchema'
import { ContractEventWhereUniqueInputSchema } from '../inputTypeSchemas/ContractEventWhereUniqueInputSchema'

export const ContractEventAggregateArgsSchema: z.ZodType<Prisma.ContractEventAggregateArgs> = z.object({
  where: ContractEventWhereInputSchema.optional(),
  orderBy: z.union([ ContractEventOrderByWithRelationInputSchema.array(),ContractEventOrderByWithRelationInputSchema ]).optional(),
  cursor: ContractEventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ContractEventAggregateArgsSchema;
