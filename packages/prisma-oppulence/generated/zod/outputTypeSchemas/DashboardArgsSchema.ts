import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DashboardSelectSchema } from '../inputTypeSchemas/DashboardSelectSchema'
import { DashboardIncludeSchema } from '../inputTypeSchemas/DashboardIncludeSchema'

export const DashboardArgsSchema: z.ZodType<Prisma.DashboardDefaultArgs> = z
    .object({
        select: z.lazy(() => DashboardSelectSchema).optional(),
        include: z.lazy(() => DashboardIncludeSchema).optional()
    })
    .strict()

export default DashboardArgsSchema
