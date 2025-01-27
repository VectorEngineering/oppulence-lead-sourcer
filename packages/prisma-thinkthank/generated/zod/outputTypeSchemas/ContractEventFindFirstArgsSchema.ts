import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractEventIncludeSchema } from '../inputTypeSchemas/ContractEventIncludeSchema'
import { ContractEventWhereInputSchema } from '../inputTypeSchemas/ContractEventWhereInputSchema'
import { ContractEventOrderByWithRelationInputSchema } from '../inputTypeSchemas/ContractEventOrderByWithRelationInputSchema'
import { ContractEventWhereUniqueInputSchema } from '../inputTypeSchemas/ContractEventWhereUniqueInputSchema'
import { ContractEventScalarFieldEnumSchema } from '../inputTypeSchemas/ContractEventScalarFieldEnumSchema'
import { ContractArgsSchema } from "../outputTypeSchemas/ContractArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContractEventSelectSchema: z.ZodType<Prisma.ContractEventSelect> = z.object({
  id: z.boolean().optional(),
  contractId: z.boolean().optional(),
  type: z.boolean().optional(),
  description: z.boolean().optional(),
  status: z.boolean().optional(),
  dueDate: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  contract: z.union([z.boolean(),z.lazy(() => ContractArgsSchema)]).optional(),
}).strict()

export const ContractEventFindFirstArgsSchema: z.ZodType<Prisma.ContractEventFindFirstArgs> = z.object({
  select: ContractEventSelectSchema.optional(),
  include: ContractEventIncludeSchema.optional(),
  where: ContractEventWhereInputSchema.optional(),
  orderBy: z.union([ ContractEventOrderByWithRelationInputSchema.array(),ContractEventOrderByWithRelationInputSchema ]).optional(),
  cursor: ContractEventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ContractEventScalarFieldEnumSchema,ContractEventScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ContractEventFindFirstArgsSchema;
