import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadFeedbackWhereInputSchema } from '../inputTypeSchemas/LeadFeedbackWhereInputSchema'

export const LeadFeedbackDeleteManyArgsSchema: z.ZodType<Prisma.LeadFeedbackDeleteManyArgs> = z
    .object({
        where: LeadFeedbackWhereInputSchema.optional()
    })
    .strict()

export default LeadFeedbackDeleteManyArgsSchema
