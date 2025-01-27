import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreHistoryIncludeSchema } from '../inputTypeSchemas/LeadScoreHistoryIncludeSchema'
import { LeadScoreHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadScoreHistoryWhereUniqueInputSchema'
import { LeadScoreHistoryCreateInputSchema } from '../inputTypeSchemas/LeadScoreHistoryCreateInputSchema'
import { LeadScoreHistoryUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadScoreHistoryUncheckedCreateInputSchema'
import { LeadScoreHistoryUpdateInputSchema } from '../inputTypeSchemas/LeadScoreHistoryUpdateInputSchema'
import { LeadScoreHistoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadScoreHistoryUncheckedUpdateInputSchema'
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

export const LeadScoreHistoryUpsertArgsSchema: z.ZodType<Prisma.LeadScoreHistoryUpsertArgs> = z.object({
  select: LeadScoreHistorySelectSchema.optional(),
  include: LeadScoreHistoryIncludeSchema.optional(),
  where: LeadScoreHistoryWhereUniqueInputSchema,
  create: z.union([ LeadScoreHistoryCreateInputSchema,LeadScoreHistoryUncheckedCreateInputSchema ]),
  update: z.union([ LeadScoreHistoryUpdateInputSchema,LeadScoreHistoryUncheckedUpdateInputSchema ]),
}).strict() ;

export default LeadScoreHistoryUpsertArgsSchema;
