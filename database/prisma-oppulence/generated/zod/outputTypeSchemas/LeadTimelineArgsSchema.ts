import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTimelineSelectSchema } from '../inputTypeSchemas/LeadTimelineSelectSchema'
import { LeadTimelineIncludeSchema } from '../inputTypeSchemas/LeadTimelineIncludeSchema'

export const LeadTimelineArgsSchema: z.ZodType<Prisma.LeadTimelineDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadTimelineSelectSchema).optional(),
        include: z.lazy(() => LeadTimelineIncludeSchema).optional()
    })
    .strict()

export default LeadTimelineArgsSchema
