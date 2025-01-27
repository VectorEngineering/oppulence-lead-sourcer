import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractDocumentWhereInputSchema } from '../inputTypeSchemas/ContractDocumentWhereInputSchema'
import { ContractDocumentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ContractDocumentOrderByWithAggregationInputSchema'
import { ContractDocumentScalarFieldEnumSchema } from '../inputTypeSchemas/ContractDocumentScalarFieldEnumSchema'
import { ContractDocumentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ContractDocumentScalarWhereWithAggregatesInputSchema'

export const ContractDocumentGroupByArgsSchema: z.ZodType<Prisma.ContractDocumentGroupByArgs> = z.object({
  where: ContractDocumentWhereInputSchema.optional(),
  orderBy: z.union([ ContractDocumentOrderByWithAggregationInputSchema.array(),ContractDocumentOrderByWithAggregationInputSchema ]).optional(),
  by: ContractDocumentScalarFieldEnumSchema.array(),
  having: ContractDocumentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ContractDocumentGroupByArgsSchema;
