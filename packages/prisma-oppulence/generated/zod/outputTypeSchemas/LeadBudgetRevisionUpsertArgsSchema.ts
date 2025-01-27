import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetRevisionIncludeSchema } from '../inputTypeSchemas/LeadBudgetRevisionIncludeSchema'
import { LeadBudgetRevisionWhereUniqueInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionWhereUniqueInputSchema'
import { LeadBudgetRevisionCreateInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionCreateInputSchema'
import { LeadBudgetRevisionUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionUncheckedCreateInputSchema'
import { LeadBudgetRevisionUpdateInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionUpdateInputSchema'
import { LeadBudgetRevisionUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionUncheckedUpdateInputSchema'
import { LeadBudgetArgsSchema } from "../outputTypeSchemas/LeadBudgetArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadBudgetRevisionSelectSchema: z.ZodType<Prisma.LeadBudgetRevisionSelect> = z.object({
  id: z.boolean().optional(),
  budgetId: z.boolean().optional(),
  previousAmount: z.boolean().optional(),
  newAmount: z.boolean().optional(),
  reason: z.boolean().optional(),
  approvedBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  budget: z.union([z.boolean(),z.lazy(() => LeadBudgetArgsSchema)]).optional(),
}).strict()

export const LeadBudgetRevisionUpsertArgsSchema: z.ZodType<Prisma.LeadBudgetRevisionUpsertArgs> = z.object({
  select: LeadBudgetRevisionSelectSchema.optional(),
  include: LeadBudgetRevisionIncludeSchema.optional(),
  where: LeadBudgetRevisionWhereUniqueInputSchema,
  create: z.union([ LeadBudgetRevisionCreateInputSchema,LeadBudgetRevisionUncheckedCreateInputSchema ]),
  update: z.union([ LeadBudgetRevisionUpdateInputSchema,LeadBudgetRevisionUncheckedUpdateInputSchema ]),
}).strict() ;

export default LeadBudgetRevisionUpsertArgsSchema;
