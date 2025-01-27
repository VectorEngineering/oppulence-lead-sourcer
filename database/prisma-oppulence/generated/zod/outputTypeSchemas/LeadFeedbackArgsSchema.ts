import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadFeedbackSelectSchema } from '../inputTypeSchemas/LeadFeedbackSelectSchema'
import { LeadFeedbackIncludeSchema } from '../inputTypeSchemas/LeadFeedbackIncludeSchema'

export const LeadFeedbackArgsSchema: z.ZodType<Prisma.LeadFeedbackDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadFeedbackSelectSchema).optional(),
        include: z.lazy(() => LeadFeedbackIncludeSchema).optional()
    })
    .strict()

export default LeadFeedbackArgsSchema
