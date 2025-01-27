import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTouchpointWhereInputSchema } from './LeadTouchpointWhereInputSchema'

export const LeadTouchpointListRelationFilterSchema: z.ZodType<Prisma.LeadTouchpointListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadTouchpointWhereInputSchema).optional(),
        some: z.lazy(() => LeadTouchpointWhereInputSchema).optional(),
        none: z.lazy(() => LeadTouchpointWhereInputSchema).optional()
    })
    .strict()

export default LeadTouchpointListRelationFilterSchema
