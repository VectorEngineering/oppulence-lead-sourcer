import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetRevisionIncludeSchema } from '../inputTypeSchemas/LeadBudgetRevisionIncludeSchema'
import { LeadBudgetRevisionWhereInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionWhereInputSchema'
import { LeadBudgetRevisionOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionOrderByWithRelationInputSchema'
import { LeadBudgetRevisionWhereUniqueInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionWhereUniqueInputSchema'
import { LeadBudgetRevisionScalarFieldEnumSchema } from '../inputTypeSchemas/LeadBudgetRevisionScalarFieldEnumSchema'
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

export const LeadBudgetRevisionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadBudgetRevisionFindFirstOrThrowArgs> = z.object({
  select: LeadBudgetRevisionSelectSchema.optional(),
  include: LeadBudgetRevisionIncludeSchema.optional(),
  where: LeadBudgetRevisionWhereInputSchema.optional(),
  orderBy: z.union([ LeadBudgetRevisionOrderByWithRelationInputSchema.array(),LeadBudgetRevisionOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadBudgetRevisionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadBudgetRevisionScalarFieldEnumSchema,LeadBudgetRevisionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadBudgetRevisionFindFirstOrThrowArgsSchema;
