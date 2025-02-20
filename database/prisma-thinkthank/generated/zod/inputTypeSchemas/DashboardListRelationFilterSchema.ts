import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardWhereInputSchema } from './DashboardWhereInputSchema'

export const DashboardListRelationFilterSchema: z.ZodType<Prisma.DashboardListRelationFilter> = z
    .object({
        every: z.lazy(() => DashboardWhereInputSchema).optional(),
        some: z.lazy(() => DashboardWhereInputSchema).optional(),
        none: z.lazy(() => DashboardWhereInputSchema).optional()
    })
    .strict()

export default DashboardListRelationFilterSchema
