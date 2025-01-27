import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadMetadataWhereInputSchema } from './LeadMetadataWhereInputSchema'

export const LeadMetadataListRelationFilterSchema: z.ZodType<Prisma.LeadMetadataListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadMetadataWhereInputSchema).optional(),
        some: z.lazy(() => LeadMetadataWhereInputSchema).optional(),
        none: z.lazy(() => LeadMetadataWhereInputSchema).optional()
    })
    .strict()

export default LeadMetadataListRelationFilterSchema
