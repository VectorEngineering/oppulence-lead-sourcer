import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSegmentationWhereInputSchema } from './LeadSegmentationWhereInputSchema'

export const LeadSegmentationRelationFilterSchema: z.ZodType<Prisma.LeadSegmentationRelationFilter> = z
    .object({
        is: z.lazy(() => LeadSegmentationWhereInputSchema).optional(),
        isNot: z.lazy(() => LeadSegmentationWhereInputSchema).optional()
    })
    .strict()

export default LeadSegmentationRelationFilterSchema
