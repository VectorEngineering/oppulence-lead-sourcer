import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCommunicationWhereInputSchema } from './LeadCommunicationWhereInputSchema'

export const LeadCommunicationListRelationFilterSchema: z.ZodType<Prisma.LeadCommunicationListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadCommunicationWhereInputSchema).optional(),
        some: z.lazy(() => LeadCommunicationWhereInputSchema).optional(),
        none: z.lazy(() => LeadCommunicationWhereInputSchema).optional()
    })
    .strict()

export default LeadCommunicationListRelationFilterSchema
