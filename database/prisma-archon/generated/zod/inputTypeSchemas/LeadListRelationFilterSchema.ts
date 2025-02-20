import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadListRelationFilterSchema: z.ZodType<Prisma.LeadListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadWhereInputSchema).optional(),
        some: z.lazy(() => LeadWhereInputSchema).optional(),
        none: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadListRelationFilterSchema
