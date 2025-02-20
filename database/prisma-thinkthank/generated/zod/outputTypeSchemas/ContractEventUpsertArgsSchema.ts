import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractEventIncludeSchema } from '../inputTypeSchemas/ContractEventIncludeSchema'
import { ContractEventWhereUniqueInputSchema } from '../inputTypeSchemas/ContractEventWhereUniqueInputSchema'
import { ContractEventCreateInputSchema } from '../inputTypeSchemas/ContractEventCreateInputSchema'
import { ContractEventUncheckedCreateInputSchema } from '../inputTypeSchemas/ContractEventUncheckedCreateInputSchema'
import { ContractEventUpdateInputSchema } from '../inputTypeSchemas/ContractEventUpdateInputSchema'
import { ContractEventUncheckedUpdateInputSchema } from '../inputTypeSchemas/ContractEventUncheckedUpdateInputSchema'
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

export const ContractEventUpsertArgsSchema: z.ZodType<Prisma.ContractEventUpsertArgs> = z.object({
  select: ContractEventSelectSchema.optional(),
  include: ContractEventIncludeSchema.optional(),
  where: ContractEventWhereUniqueInputSchema,
  create: z.union([ ContractEventCreateInputSchema,ContractEventUncheckedCreateInputSchema ]),
  update: z.union([ ContractEventUpdateInputSchema,ContractEventUncheckedUpdateInputSchema ]),
}).strict() ;

export default ContractEventUpsertArgsSchema;
