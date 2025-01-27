import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportColumnSelectSchema } from '../inputTypeSchemas/ReportColumnSelectSchema'
import { ReportColumnIncludeSchema } from '../inputTypeSchemas/ReportColumnIncludeSchema'

export const ReportColumnArgsSchema: z.ZodType<Prisma.ReportColumnDefaultArgs> = z
    .object({
        select: z.lazy(() => ReportColumnSelectSchema).optional(),
        include: z.lazy(() => ReportColumnIncludeSchema).optional()
    })
    .strict()

export default ReportColumnArgsSchema
