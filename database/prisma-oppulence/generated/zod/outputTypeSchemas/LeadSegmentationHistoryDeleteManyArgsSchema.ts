import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationHistoryWhereInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryWhereInputSchema'

export const LeadSegmentationHistoryDeleteManyArgsSchema: z.ZodType<Prisma.LeadSegmentationHistoryDeleteManyArgs> = z
    .object({
        where: LeadSegmentationHistoryWhereInputSchema.optional()
    })
    .strict()

export default LeadSegmentationHistoryDeleteManyArgsSchema
