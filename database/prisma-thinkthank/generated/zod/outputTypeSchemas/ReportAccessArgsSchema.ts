import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportAccessSelectSchema } from '../inputTypeSchemas/ReportAccessSelectSchema'
import { ReportAccessIncludeSchema } from '../inputTypeSchemas/ReportAccessIncludeSchema'

export const ReportAccessArgsSchema: z.ZodType<Prisma.ReportAccessDefaultArgs> = z
    .object({
        select: z.lazy(() => ReportAccessSelectSchema).optional(),
        include: z.lazy(() => ReportAccessIncludeSchema).optional()
    })
    .strict()

export default ReportAccessArgsSchema
