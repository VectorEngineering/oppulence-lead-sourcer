import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractTemplateWhereInputSchema } from '../inputTypeSchemas/ContractTemplateWhereInputSchema'
import { ContractTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/ContractTemplateOrderByWithRelationInputSchema'
import { ContractTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/ContractTemplateWhereUniqueInputSchema'

export const ContractTemplateAggregateArgsSchema: z.ZodType<Prisma.ContractTemplateAggregateArgs> = z.object({
  where: ContractTemplateWhereInputSchema.optional(),
  orderBy: z.union([ ContractTemplateOrderByWithRelationInputSchema.array(),ContractTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: ContractTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ContractTemplateAggregateArgsSchema;
