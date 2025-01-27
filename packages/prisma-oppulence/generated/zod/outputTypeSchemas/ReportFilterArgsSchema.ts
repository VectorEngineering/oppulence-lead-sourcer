import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportFilterSelectSchema } from '../inputTypeSchemas/ReportFilterSelectSchema'
import { ReportFilterIncludeSchema } from '../inputTypeSchemas/ReportFilterIncludeSchema'

export const ReportFilterArgsSchema: z.ZodType<Prisma.ReportFilterDefaultArgs> = z
    .object({
        select: z.lazy(() => ReportFilterSelectSchema).optional(),
        include: z.lazy(() => ReportFilterIncludeSchema).optional()
    })
    .strict()

export default ReportFilterArgsSchema
