import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportColumnWhereInputSchema } from './ReportColumnWhereInputSchema'

export const ReportColumnListRelationFilterSchema: z.ZodType<Prisma.ReportColumnListRelationFilter> = z
    .object({
        every: z.lazy(() => ReportColumnWhereInputSchema).optional(),
        some: z.lazy(() => ReportColumnWhereInputSchema).optional(),
        none: z.lazy(() => ReportColumnWhereInputSchema).optional()
    })
    .strict()

export default ReportColumnListRelationFilterSchema
