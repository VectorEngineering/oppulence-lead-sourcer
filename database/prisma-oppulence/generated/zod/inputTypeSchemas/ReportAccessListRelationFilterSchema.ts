import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessWhereInputSchema } from './ReportAccessWhereInputSchema'

export const ReportAccessListRelationFilterSchema: z.ZodType<Prisma.ReportAccessListRelationFilter> = z
    .object({
        every: z.lazy(() => ReportAccessWhereInputSchema).optional(),
        some: z.lazy(() => ReportAccessWhereInputSchema).optional(),
        none: z.lazy(() => ReportAccessWhereInputSchema).optional()
    })
    .strict()

export default ReportAccessListRelationFilterSchema
