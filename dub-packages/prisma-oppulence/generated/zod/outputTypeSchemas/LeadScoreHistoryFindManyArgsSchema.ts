import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreHistoryIncludeSchema } from '../inputTypeSchemas/LeadScoreHistoryIncludeSchema'
import { LeadScoreHistoryWhereInputSchema } from '../inputTypeSchemas/LeadScoreHistoryWhereInputSchema'
import { LeadScoreHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadScoreHistoryOrderByWithRelationInputSchema'
import { LeadScoreHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadScoreHistoryWhereUniqueInputSchema'
import { LeadScoreHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/LeadScoreHistoryScalarFieldEnumSchema'
import { LeadScoreArgsSchema } from "../outputTypeSchemas/LeadScoreArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadScoreHistorySelectSchema: z.ZodType<Prisma.LeadScoreHistorySelect> = z.object({
  id: z.boolean().optional(),
  leadScoreId: z.boolean().optional(),
  previousScore: z.boolean().optional(),
  newScore: z.boolean().optional(),
  changeReason: z.boolean().optional(),
  timestamp: z.boolean().optional(),
  leadScore: z.union([z.boolean(),z.lazy(() => LeadScoreArgsSchema)]).optional(),
}).strict()

export const LeadScoreHistoryFindManyArgsSchema: z.ZodType<Prisma.LeadScoreHistoryFindManyArgs> = z.object({
  select: LeadScoreHistorySelectSchema.optional(),
  include: LeadScoreHistoryIncludeSchema.optional(),
  where: LeadScoreHistoryWhereInputSchema.optional(),
  orderBy: z.union([ LeadScoreHistoryOrderByWithRelationInputSchema.array(),LeadScoreHistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadScoreHistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadScoreHistoryScalarFieldEnumSchema,LeadScoreHistoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadScoreHistoryFindManyArgsSchema;
