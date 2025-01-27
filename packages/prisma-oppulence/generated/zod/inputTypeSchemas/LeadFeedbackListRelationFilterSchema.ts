import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadFeedbackWhereInputSchema } from './LeadFeedbackWhereInputSchema'

export const LeadFeedbackListRelationFilterSchema: z.ZodType<Prisma.LeadFeedbackListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadFeedbackWhereInputSchema).optional(),
        some: z.lazy(() => LeadFeedbackWhereInputSchema).optional(),
        none: z.lazy(() => LeadFeedbackWhereInputSchema).optional()
    })
    .strict()

export default LeadFeedbackListRelationFilterSchema
