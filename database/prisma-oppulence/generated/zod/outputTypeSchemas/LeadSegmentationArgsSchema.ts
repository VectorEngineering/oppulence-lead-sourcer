import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationSelectSchema } from '../inputTypeSchemas/LeadSegmentationSelectSchema'
import { LeadSegmentationIncludeSchema } from '../inputTypeSchemas/LeadSegmentationIncludeSchema'

export const LeadSegmentationArgsSchema: z.ZodType<Prisma.LeadSegmentationDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadSegmentationSelectSchema).optional(),
        include: z.lazy(() => LeadSegmentationIncludeSchema).optional()
    })
    .strict()

export default LeadSegmentationArgsSchema
