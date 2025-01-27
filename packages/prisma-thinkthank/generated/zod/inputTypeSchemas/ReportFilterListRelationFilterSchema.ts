import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportFilterWhereInputSchema } from './ReportFilterWhereInputSchema'

export const ReportFilterListRelationFilterSchema: z.ZodType<Prisma.ReportFilterListRelationFilter> = z
    .object({
        every: z.lazy(() => ReportFilterWhereInputSchema).optional(),
        some: z.lazy(() => ReportFilterWhereInputSchema).optional(),
        none: z.lazy(() => ReportFilterWhereInputSchema).optional()
    })
    .strict()

export default ReportFilterListRelationFilterSchema
