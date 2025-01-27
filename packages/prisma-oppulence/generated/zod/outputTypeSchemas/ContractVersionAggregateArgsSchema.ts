import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractVersionWhereInputSchema } from '../inputTypeSchemas/ContractVersionWhereInputSchema'
import { ContractVersionOrderByWithRelationInputSchema } from '../inputTypeSchemas/ContractVersionOrderByWithRelationInputSchema'
import { ContractVersionWhereUniqueInputSchema } from '../inputTypeSchemas/ContractVersionWhereUniqueInputSchema'

export const ContractVersionAggregateArgsSchema: z.ZodType<Prisma.ContractVersionAggregateArgs> = z.object({
  where: ContractVersionWhereInputSchema.optional(),
  orderBy: z.union([ ContractVersionOrderByWithRelationInputSchema.array(),ContractVersionOrderByWithRelationInputSchema ]).optional(),
  cursor: ContractVersionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ContractVersionAggregateArgsSchema;
