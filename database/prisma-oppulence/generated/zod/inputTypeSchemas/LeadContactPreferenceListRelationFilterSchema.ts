import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadContactPreferenceWhereInputSchema } from './LeadContactPreferenceWhereInputSchema'

export const LeadContactPreferenceListRelationFilterSchema: z.ZodType<Prisma.LeadContactPreferenceListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadContactPreferenceWhereInputSchema).optional(),
        some: z.lazy(() => LeadContactPreferenceWhereInputSchema).optional(),
        none: z.lazy(() => LeadContactPreferenceWhereInputSchema).optional()
    })
    .strict()

export default LeadContactPreferenceListRelationFilterSchema
