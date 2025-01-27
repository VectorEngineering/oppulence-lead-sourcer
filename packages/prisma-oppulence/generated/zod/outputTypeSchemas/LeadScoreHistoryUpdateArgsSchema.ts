import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadScoreHistoryIncludeSchema } from '../inputTypeSchemas/LeadScoreHistoryIncludeSchema'
import { LeadScoreHistoryUpdateInputSchema } from '../inputTypeSchemas/LeadScoreHistoryUpdateInputSchema'
import { LeadScoreHistoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadScoreHistoryUncheckedUpdateInputSchema'
import { LeadScoreHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadScoreHistoryWhereUniqueInputSchema'
import { LeadScoreArgsSchema } from './LeadScoreArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadScoreHistorySelectSchema: z.ZodType<Prisma.LeadScoreHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        leadScoreId: z.boolean().optional(),
        previousScore: z.boolean().optional(),
        newScore: z.boolean().optional(),
        changeReason: z.boolean().optional(),
        timestamp: z.boolean().optional(),
        leadScore: z.union([z.boolean(), z.lazy(() => LeadScoreArgsSchema)]).optional()
    })
    .strict()

export const LeadScoreHistoryUpdateArgsSchema: z.ZodType<Prisma.LeadScoreHistoryUpdateArgs> = z
    .object({
        select: LeadScoreHistorySelectSchema.optional(),
        include: LeadScoreHistoryIncludeSchema.optional(),
        data: z.union([LeadScoreHistoryUpdateInputSchema, LeadScoreHistoryUncheckedUpdateInputSchema]),
        where: LeadScoreHistoryWhereUniqueInputSchema
    })
    .strict()

export default LeadScoreHistoryUpdateArgsSchema
